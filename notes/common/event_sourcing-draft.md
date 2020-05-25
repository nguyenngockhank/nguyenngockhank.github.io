# Event Sourcing 


## With PHP


### Interfaces 

1/ AggregateRoot

```php
interface AggregateRoot extends RecordsEvents, IsEventSourced, TracksChanges 
{ 
} 
```

2/ RecordsEvents

```php
/**
 * An object that records the events that happened to it since the last time it was cleared, or since it was
 * restored from persistence.
 */
interface RecordsEvents
{
    /**
     * Get all the Domain Events that were recorded since the last time it was cleared, or since it was
     * restored from persistence. This does not include events that were recorded prior.
     * @return DomainEvents
     */
    public function getRecordedEvents();


    /**
     * Clears the record of new Domain Events. This doesn't clear the history of the object.
     * @return void
     */
    public function clearRecordedEvents();
}
```

3/ TracksChanges

```php
/**
 * An AggregateRoot that exposes whether it was changed.
 */
interface TracksChanges
{
    public function getAggregateId();

    public function hasChanges();
}
```

4/ IsEventSourced

```php
/**
 * An AggregateRoot, that can be reconstituted from an AggregateHistory.
 */
interface IsEventSourced
{
    /**
     * @param AggregateHistory $aggregateHistory
     * @return RecordsEvents
     */
    public static function reconstituteFrom(AggregateHistory $aggregateHistory);

    /**
     * @return IdentifiesAggregate
     */
    // @todo do we need this here?
    //public function getAggregateId();
}

```

### Implementation 

Post

```php
class Post implements RecordsEvents, IsEventSourced
{
    private $recordedEvents = [];


    /**
     * Implement Interface
     */
    public function getRecordedEvents()
    {
        return new DomainEvents($this->recordedEvents);
    }

    public function clearRecordedEvents()
    {
        $this->recordedEvents = [];
    }


    /**
     * Implement Interface
     */
    public static function reconstituteFrom(AggregateHistory $anAggregateHistory)
    {
        $aPost = static::createEmptyPostWith($anAggregateHistory->getAggregateId());

        foreach ($anAggregateHistory as $anEvent) {
            $aPost->apply($anEvent);
        }
        return $aPost;
    }

    private static function createEmptyPostWith($aPostId)
    {
        return new Post($aPostId, '', '', static::STATE_DRAFT);
    }

    private function apply($anEvent)
    {
        $method = 'apply' . ClassFunctions::short($anEvent);
        $this->$method($anEvent);
    }


    /**  
     * Apply Methods 
     */
    private function applyPostWasCreated(PostWasCreated $event)
    {
        $this->title = $event->getTitle();
        $this->content = $event->getContent();
    }

    private function applyPostWasPublished(PostWasPublished $event)
    {
        $this->state = static::STATE_PUBLISHED;
    }

    private function applyPostTitleWasChanged(PostTitleWasChanged $event)
    {
        $this->title = $event->getTitle();
    }

    /** 
     *  Methods for runtime 
     */
    private function recordThat(DomainEvent $aDomainEvent)
    {
        $this->recordedEvents[] = $aDomainEvent;
    }

    private function applyAndRecordThat(DomainEvent $aDomainEvent)
    {
        $this->recordThat($aDomainEvent);

        $this->apply($aDomainEvent);
    }

    public static function create($aPostId, $aTitle, $aContent)
    {
        $aNewPost = new Post($aPostId, $aTitle, $aContent, static::STATE_DRAFT);

        $aNewPost->recordThat(
            new PostWasCreated($aPostId, $aTitle, $aContent, static::STATE_DRAFT)
        );

        return $aNewPost;
    }

    public function publish()
    {
        $this->applyAndRecordThat(
            new PostWasPublished($this->postId)
        );
    }

    public function changeTitle($aNewTitle)
    {
        $this->applyAndRecordThat(
            new PostTitleWasChanged($this->postId, $aNewTitle)
        );
    }
}
```

## DomainEvent


```php
interface DomainEvent
{
    public function getAggregateId();
}
```

`/src/BlogEngine/DomainModel/PostTitleWasChanged.php`

<!-- <<< @/snippets/ddd/PostTitleWasChanged.php -->


## DomainEvents

```php
class DomainEvents extends ImmutableArray
{
    /**
     * Throw when the type of item is not accepted.
     *
     * @param $item
     * @throws ArrayIsImmutable
     * @return void
     */
    protected function guardType($item)
    {
        if(!($item instanceof DomainEvent)) {
            throw new ArrayIsImmutable;
        }
    }
}

```

### AggregateHistory

```php
final class AggregateHistory extends DomainEvents
{
    /**
     * @var IdentifiesAggregate
     */
    private $aggregateId;

    public function __construct(IdentifiesAggregate $aggregateId, array $events)
    {
        /** @var $event DomainEvent */
        foreach($events as $event) {
            if(!$event->getAggregateId()->equals($aggregateId)) {
                throw new CorruptAggregateHistory;
            }
        }
        parent::__construct($events);
        $this->aggregateId = $aggregateId;
    }

    /**
     * @return IdentifiesAggregate
     */
    public function getAggregateId()
    {
        return $this->aggregateId;
    }

    /**
     * @param DomainEvent $domainEvent
     * @return AggregateHistory
     */
    public function append(DomainEvent $domainEvent)
    {
        throw new \Exception("@todo  Implement append() method.");
    }
}
```

## EventStore 

```php
interface EventStore
{
    /**
     * @param DomainEvents $events
     *
     * @return void
     */
    public function commit(DomainEvents $events);

    /**
     * @param IdentifiesAggregate $id
     *
     * @return AggregateHistory
     */
    public function getAggregateHistoryFor(IdentifiesAggregate $id);
}
```

### MongoDbEventStore

```php
class MongoDbEventStore implements EventStore
{
    /**
     * @var MongoCollection
     */
    private $eventsCollection;

    /**
     * @var Serializer
     */
    private $serializer;

    public function __construct($eventsCollection, $serializer)
    {
        $this->eventsCollection = $eventsCollection;
        $this->serializer = $serializer;
    }

    /**
     * @param DomainEvents $events
     * @return void
     */
    public function commit(DomainEvents $events)
    {
        foreach ($events as $event) {
            $this->eventsCollection->insert([
                'aggregate_id'  => (string) $event->getAggregateId(),
                'type'          => get_class($event),
                'created_at'    => new MongoDate(),
                'data'          => $this->serializer->serialize($event, 'json')
            ]);
        }
    }

    /**
     * @param IdentifiesAggregate $id
     * @return AggregateHistory
     */
    public function getAggregateHistoryFor(IdentifiesAggregate $id)
    {
        $rawEvents = $this->eventsCollection->find(['aggregate_id' => (string) $id]);

        $events = [];

        foreach ($rawEvents as $rawEvent) {
            $events[] = $this->serializer->deserialize(
                $rawEvent['data'],
                $rawEvent['type'],
                'json'
            );
        }

        return new AggregateHistory($id, $events);
    }
}
```

### PDOEventStore

```php

class PDOEventStore implements EventStore
{
    /**
     * @var PDO
     */
    private $pdo;

    /**
     * @var Serializer
     */
    private $serializer;

    public function __construct($pdo, $serializer)
    {
        $this->pdo = $pdo;
        $this->serializer = $serializer;
    }

    /**
     * @param DomainEvents $events
     * @return void
     */
    public function commit(DomainEvents $events)
    {
        $stmt = $this->pdo->prepare(
            'INSERT INTO events (aggregate_id, `type`, created_at, `data`)
             VALUES (:aggregate_id, :type, :created_at, :data)'
        );

        foreach ($events as $event) {
            $stmt->execute([
                ':aggregate_id' => (string) $event->getAggregateId(),
                ':type'         => get_class($event),
                ':created_at'   => (new DateTimeImmutable())->format('Y-m-d H:i:s'),
                ':data'         => $this->serializer->serialize($event, 'json')
            ]);
        }
    }

    /**
     * @param IdentifiesAggregate $id
     * @return AggregateHistory
     */
    public function getAggregateHistoryFor(IdentifiesAggregate $id)
    {
        $stmt = $this->pdo->query(
            'SELECT * FROM events WHERE aggregate_id = :aggregate_id'
        );
        $stmt->execute([':aggregate_id' => (string) $id]);

        $events = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $events[] = $this->serializer->deserialize(
                $row['data'],
                $row['type'],
                'json'
            );
        }

        $stmt->closeCursor();

        return new AggregateHistory($id, $events);
    }
}

```



## References 

- [Why Event Sourcing is a microservice communication anti-pattern](https://dev.to/olibutzki/why-event-sourcing-is-a-microservice-anti-pattern-3mcj)
- [1 Year of Event Sourcing and CQRS](https://hackernoon.com/1-year-of-event-sourcing-and-cqrs-fb9033ccd1c6)
- [Don't Let the Internet Dupe You, Event Sourcing is Hard](https://chriskiehl.com/article/event-sourcing-is-hard)
- [Thứ tự message trong mô hình Event Sourcing](https://kipalog.com/posts/Thu-tu-message-trong-mo-hinh-Event-Sourcing)
- [Thiết kế hệ thống quản lý danh mục sản phẩm trong hệ thống Ecommerce (DDD và CQRS)](https://engineering.tiki.vn/thi%E1%BA%BFt-k%E1%BA%BF-h%E1%BB%87-th%E1%BB%91ng-qu%E1%BA%A3n-l%C3%BD-danh-m%E1%BB%A5c-s%E1%BA%A3n-ph%E1%BA%A9m-trong-h%E1%BB%87-th%E1%BB%91ng-ecommerce-36283df511b3)