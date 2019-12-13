# Docker
[[toc]]

## Commands

### Image

:::: tabs
::: tab "List All"
```
docker images
```
:::

::: tab Pull
```
docker pull <image:tag>
# E.g: 
docker pull centos:6.10 
```
:::

::: tab Inspect
```
docker inspect  <ID or NAME>
``` 
:::

::: tab Remove
```
docker rmi <ID or NAME>
```
:::



::::

--- 

### Container

:::: tabs
::: tab "List All"

List running container only 
```
docker ps 
```

All of list, includes hidden ones

```
docker ps -a 
```
:::

::: tab Start
```
docker start <ID or NAME>
docker exec -it <ID or NAME> /bin/bash
```
:::

::: tab Stop
```
docker stop  <ID or NAME>
```
:::


::: tab Remove
```
docker rm -f <ID or NAME>
```
:::


::: tab "IP Address"
```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <ID or NAME>
```
:::

::::

### Run

:::: tabs


::: tab "Expose Port"
```
docker run -d -p 5801:5800 --name vnc1 myvnc 
```

multi ports

```
docker run -d -p 5801:5801 -p 5802:5802 .....
```
:::
::::


### Network

[Detail](https://www.tutorialspoint.com/docker/docker_networking.htm)

:::: tabs

::: tab "List All"
```
docker network ls 
```
:::



::: tab "Create New"

```
docker network create –-driver drivername name 
# E.g
docker network create –-driver bridge new_nw 
```

- **drivername** − This is the name used for the network driver.
- **name** − This is the name given to the network.
:::

::: tab Inspect
```
docker network inspect <NetworkName> 
```
:::

::::


### Other

Check Version
```
docker -v
```