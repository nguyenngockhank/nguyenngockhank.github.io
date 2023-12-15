# Docker

## Terms

- **Docker Hub**: store Docker Image
- **Docker Engine**: create **Docker Image** & run **Docker Container**
- **Docker Machine**: create **Docker Engine** on Server
- **Docker Compose**: run application by defining Docker Container configuration in file
- **Docker Image**: (immutable)
- **Docker Container**: … 

## How does Docker Work?

Docker's architecture comprises three main components:

🔹 Docker Client
This is the interface through which users interact. It communicates with the Docker daemon.

🔹 Docker Host
Here, the Docker daemon listens for Docker API requests and manages various Docker objects, including images, containers, networks, and volumes.

🔹 Docker Registry
This is where Docker images are stored. Docker Hub, for instance, is a widely-used public registry.


![docker working](https://lh3.googleusercontent.com/pw/ABLVV86cphVayhq7FjqV3xFPSpsJjiGRJ1eymYS8oFCEk-Hau07NtwAuSedDBbrN13ygw4HJ35v4YhpiPzDy0qSujJ9mE-5bhzjwRNlNknUvFhuAoYO-9y-fkr5l-Ro79kHpJ3IlLT1tWD7PSfhNTHe8xqN13A4h0BohmSUn9PtFLh99nDDPLdAyY-S8lky3dWlExGuM7DybYx1vHqTE9YKFJWyi1ne72P22J59AzW-9ehR7cNlYBd8xU97IcWoq6HjJrF7orFoVwml3mz-OE8a605oErN4UgRhcbg2diVOBl9ZTMyVLigXa-U5Sih3b4ku-i-2puO-gEhWLMi48CUBQu1glUwhdivbXeACHrMJdzILrujj_b9Q_0eFh9GG7qkG-1BtMgbRisgxbCmt-pSOTnOf_sYrdfNkJavyhOqTUa2HeiLuQwiyV_gLRE_biOHqAFe911LFSp4h-cnxcHCIygA--QQ2TQCNehDnu7g6cqttQzZkR9kVcg9cTdamFz89OIC3ZFVslkuUpfB6CkOX1UEU3B44fefBqsxm1Na5CuNxM2lpgoGhLv0fapTS-zjk49kFTX1P--xZ4sYg4VOTR1ju9MuWrin4wRXILakQAkECWE7ALRAcj75FoQ-VopyVUxpq9xU77L3OcSfyHQ8OZKRYNUVJ_gmBusuyNoUczD9mugscv8l7CLM9VawsZunZQCsoM4xqRIC_1dJkERIkFbt6y4BV9rovrY-hkAj75solwhIi_2mMAgpMf5A20Ul7iLzIXeYyGtJW2CpVT9t03KO3nSYoxGVxkRuT9YhTI8beq5JxWZWN5SN94uaPYmw-TphfXbhHJtWyMrk_mhG3RTRxWacn2CCaQJz_i2Aihzk3vJGuMei13vgQYC-p8bTvVUbuWrVV8VUdC3bfktk_80LpQR3izBENh4pH91HvHxg=w572-h569-s-no-gm)

[Read more](https://twitter.com/bytebytego/status/1725033713497694253)

## Image

![Image with container](./img/docker-image-container.png)

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



## Container

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

## Run

### Expose Port
```sh
docker run -d -p 5801:5800 --name vnc1 myvnc 
```

multi ports

```sh
docker run -d -p 5801:5801 -p 5802:5802 .....
```

### Volume

```sh
docker run -it -v <path-host>:<container-path> <ID or NAME>
# E.g:
docker run -it -v /Users/nguyenkhank/Desktop/jav:/home/dulieu ubuntu
```

Use the same data:

```sh
docker run -it --name C2 --volumes-from C1 ubuntu:latest
```


### With Volume

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


## Volume

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


## Network

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