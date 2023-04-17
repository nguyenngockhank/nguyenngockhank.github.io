# NestJS - [CQRS](https://docs.nestjs.com/recipes/cqrs)


```
npm i @nestjs/cqrs
npm i @nestjs-architects/typed-cqrs
```

## Import module

```ts
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  // ... more code
})
```

## Command Processing

### Command Definition
```ts
export class CancelHoldCommand extends Command<Result> {
  constructor(
    public readonly patronId: PatronId,
    public readonly bookId: BookId
  ) {
    super();
  }
}
```

### Command Publisher

```ts
import { EventBus } from '@nestjs/cqrs';

@Injectable()
export class LendingFacade {
  constructor(private readonly commandBus: CommandBus) {}

  cancelHold(command: CancelHoldCommand): Promise<Result> {
    return this.commandBus.execute(command);
  }
}
```

### Command Handler

```ts
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';


@CommandHandler(CancelHoldCommand)
export class CancelHoldHandler implements ICommandHandler<CancelHoldCommand> {
  constructor(
    private readonly findBookOnHold: FindBookOnHold,
    private readonly patronRepository: PatronRepository
  ) {}
  async execute(command: CancelHoldCommand): Promise<Result> {
    const bookOnHold = await this.findBook(command.bookId, command.patronId);
    const patron = await this.findPatron(command.patronId);
    const result = patron.cancelHold(bookOnHold);

    return pipe(
      result,
      match<BookHoldCancelingFailed, BookHoldCanceled, Promise<Result>>(
        this.publishOnFail.bind(this),
        this.publishOnSuccess.bind(this)
      )
    );
  }
  
  // ... more code
}
```

## Event 

Same as Command

```ts
import { EventBus } from '@nestjs/cqrs';

import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
```