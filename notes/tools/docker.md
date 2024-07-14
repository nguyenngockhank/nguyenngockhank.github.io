---
tags: ["Tools", "Overview", "Docker"]
---

# Docker

<TagLinks />

## Concepts

![Containerization](https://i.pinimg.com/originals/3f/d2/d7/3fd2d748354c025f35683a353caf98d7.jpg)

![Docker Concepts](https://i.pinimg.com/originals/4d/b0/16/4db0165a062171a6d27585b97963bc64.jpg)


### Main components 

![Docker Main components](https://i.pinimg.com/originals/07/c0/4d/07c04dbd6041c90bdffa362cdc870a2e.gif)

- **Docker Hub**: store Docker Image
- **Docker Engine**: create **Docker Image** & run **Docker Container**
- **Docker Machine**: create **Docker Engine** on Server
- **Docker Compose**: run application by defining Docker Container configuration in file
- **Docker Image**: (immutable)
- **Docker Container**: … 

### Benifits

![Docker Benifits](https://i.pinimg.com/originals/61/33/fc/6133fca7dcb2f21f3fff1a1efed9943e.jpg)

## How it works

![How docker works](https://i.pinimg.com/564x/8f/17/c7/8f17c768e07f06fd55bd3277aca28dd7.jpg)

Docker's architecture comprises three main components:

🔹 Docker Client
This is the interface through which users interact. It communicates with the Docker daemon.

🔹 Docker Host
Here, the Docker daemon listens for Docker API requests and manages various Docker objects, including images, containers, networks, and volumes.

🔹 Docker Registry
This is where Docker images are stored. Docker Hub, for instance, is a widely-used public registry.

[Read more](https://twitter.com/bytebytego/status/1725033713497694253)

## Workflow 

![Docker Workflow 2](https://i.pinimg.com/564x/54/a1/d6/54a1d64b88eb46f786b49bd2763c5521.jpg)

![Docker Workflow](https://i.pinimg.com/originals/a8/6e/9d/a86e9daa473b910f5ef2640e2d989f06.jpg)

![Image with container](./img/docker-image-container.png)

## Use cases

![Docker use cases](https://i.pinimg.com/564x/ca/e4/4c/cae44c113990bb6f9637a3dc25693d29.jpg)

## Commands 

![Docker commands](https://i.pinimg.com/564x/e2/2f/9a/e22f9ae8c602a7662a737344170cd597.jpg)

### Image


:::: tabs
::: tab "List All"
```sh
docker images
```
:::

::: tab Pull
```sh
docker pull <image:tag>
# E.g: 
docker pull centos:6.10 
```
Default tag: `latest`
:::

::: tab Inspect
```sh
docker inspect  <ID or NAME>
``` 
:::

::: tab Remove
```sh
docker rm <ID or NAME>

docker rm -f <ID or NAME>
```


Remove all

```sh
docker rmi $(docker images) -f
```
:::

::: tab Save/Load

Save
```sh
docker save --output <filename> <ID or NAME>
# e.g:
docker save --output myimage.tar khank-ubuntu
```

Load
```sh
docker load -i <filename>
```

Rename
```sh
docker tag f <image-name:tag>
```
:::
::::



### Container

:::: tabs
::: tab "List All"

List running container only 
```sh
docker ps 
```

All of list, includes hidden ones

```sh
docker ps -a 
```
:::

::: tab Start/Stop

```sh
docker start <ID or NAME>
```

```sh
docker stop  <ID or NAME>
```
:::

::: tab Attach/Detach

Attach
```sh
docker attach <ID>
```
Detach
```sh
Ctrl + P, Ctrl + Q
```
:::

::: tab Remove
```sh
docker rm -f <ID or NAME>
```

Remove all
```sh
docker kill $(docker ps -q)
```
:::

::: tab "IP Address"
```sh
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <ID or NAME>
```
:::
::::

### Save as Image

Container must be stoped before committing.
```sh
docker commit <container-name> <new-image-name:tag>
```

### Run

#### Expose Port
```sh
docker run -d -p 5801:5800 --name vnc1 myvnc 
```

multi ports

```sh
docker run -d -p 5801:5801 -p 5802:5802 .....
```

#### Volume

```sh
docker run -it -v <path-host>:<container-path> <ID or NAME>
# E.g:
docker run -it -v /Users/nguyenkhank/Desktop/jav:/home/dulieu ubuntu
```

Use the same data:

```sh
docker run -it --name C2 --volumes-from C1 ubuntu:latest
```


#### With Volume

```sh
docker run -it --name <container-name> --mount source=<volume-name>,target=<container-path> <image-name:tag>
# E.g:
docker run -it --name C1 --mount source=D1,target=/home/dulieu ubuntu:16.0.4
```

Case volume mounted with device

```sh
docker run -it --name <container-name> --mount source=<volume-name>,target=<container-path> <image-name:tag>
# E.g:
docker run -it --name C1 -v DISK1:/home/dulieu ubuntu:16.0.4
```

### Exit 

#### Exit and Stop Docker Container 
- **Ctrl+C** to send the `SIGINT` signal and stop the process. Next, press **Ctrl+D** to exit and stop the container.
- Alternatively, type `exit`

#### Exit Docker Container without Stopping It

- press **Ctrl+P** followed by **Ctrl+Q**. This operation detaches the container and allows you to return to your system's shell.


### Volume

:::: tabs

::: tab List
```sh
docker volume ls
```
:::

::: tab Create
```sh
docker volume create <Volume-name>
# E.g:
docker volume create D1
```

Mount to device path
```sh
docker create --opt device=<path-host> --opt type=none --opt o=bind <volume-name>
# E.g
docker create --opt device=/Users/nguyenkhank/Desktop/jav --opt type=none --opt o=bind DISK1
```
:::

::: tab Info
```sh
docker volume inspect <Volume-name>
# E.g
docker volume inspect D1
```
:::

::: tab Remove
```sh
docker volume rm <Volume-name>
# E.g
docker volume rm D1
```
:::
::::


### Network

[Detail](https://www.tutorialspoint.com/docker/docker_networking.htm)
[Detail](https://docs.docker.com/engine/reference/commandline/network_connect/#:~:text=Connect%20a%20container%20to%20a%20network%20when%20it%20starts,connect%20it%20to%20a%20network.)

:::: tabs

::: tab "List All"
```sh
docker network ls 
```
:::

::: tab "Create New"

```sh
docker network create –-driver DRIVER_NAME name 
# E.g
docker network create –-driver bridge new_nw 
```

- **drivername** − This is the name used for the network driver.
- **name** − This is the name given to the network.
:::

::: tab Connect
```sh
docker network connect <NetworkName>  <container-name>
# E.g
docker network connect my_network my_container
```
:::

::: tab Inspect
```sh
docker network inspect <NetworkName> 
```
:::

::::


### Other

**Info** 
```sh
docker info
docker -v
```

**Help**
```sh
docker image --help
```

**Search**
```sh
docker search <keyword>
```


## Simple build 

:::: tabs

::: tab server.js

```js
const app = express();

// your code
const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
```
:::

::: tab package.json
```json
{
    "scripts": {
        "start": "node server.js"
    }
    // dependencies

    // dev dependencies
}
```
:::

::: tab Dockerfile
```sh
FROM node:16

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server. js"]
```
:::

::: tab Commands

**Build with tag**

```
docker build -t yourname/yourapp:v1

docker build -t yourname/yourapp:v2
```

**Check your new image**

```
docker images
```

**Push new image to repo**

```
docker push yourname/yourapp:v1

docker push yourname/yourapp:v2
```

**Run your image**

```
docker run -d -p 8080:8080 yourname/yourapp:v1

docker run -d -p 8080:8081 yourname/yourapp:v2
```
:::
::::

## Docker vs K8S

![Docker vs K8S](https://i.pinimg.com/originals/f7/de/0c/f7de0c5b6ccfb3b41c61131416925a1a.jpg)