# Breath first search

## Context

Assume we have a graph that was represented by the these code below:
```py
graph = {}
graph["you"] = ["sontungmtp", "bob", "micheal"]
graph["sontungmtp"] = ["sky", "lk"]
graph["bob"] = []
graph["micheal"] = ["lk"]
graph["sky"] = ["chilong"]
# ... 
```

And we have a function to check a person is a seller.

```py
def person_is_seller (person):
    return name[-1] == 'l' # for example
```


## Implementation 

```py
from collections import deque

def search (name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        if not person in searched:
            if person_is_seller(person):
                print person + " is a seller!"
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False

search("you)
```