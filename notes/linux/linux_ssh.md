# SSH Notes

## Generate SSH key pair

```sh
ssh-keygen -t rsa -b 4096 -C "My SSH Key for Server Access"
```

This will generate a 4096-bit RSA key pair with the comment "My SSH Key for Server Access". The private key will be saved as `~/.ssh/id_rsa` and the public key as `~/.ssh/id_rsa.pub`.

- `-t rsa` (default): type of key
- `-b 4096` (recommended): key size in bits
- `-C comment"`
- `-f filename`: By default, it's saved as `id_rsa` in the `.ssh` directory of `home` directory

## Connect remote server with alias

```sh
ssh server-dev-app
```

Configure your config at `~/.ssh/config` with something like: 
```
Host server-dev-app
    Hostname 13.xx.xx.xx
    User ubuntu
    Port 22
    IdentityFile ~/.ssh/{file-name}.pem
```

*Note*: make sure your `.pem` file is correct

### SSH Connection Flow 

![SSH Flow](https://i.pinimg.com/736x/e9/9c/5e/e99c5ee5406d5721d152ec93925ba902.jpg)

## Local Port Forwarding

A typical scenario for this kind of port forwarding is when you're developing locally and need to connect to a database or service running on a remote server.

```
ssh -L 54321:127.0.0.1:5432 ubuntu@server-dev-app
```

- `-L`:  Local Port Forwarding

This command creates a tunnel that redirects traffic from a specific port (**54321**) on your local machine to a different port (**5432**) on the remote server (`server-dev-app`).

When you try to connect to `localhost:54321` on your machine, the SSH connection will transparently route that traffic to the actual service running on port **5432** of the remote server.

## Copy files

```sh
scp ubuntu@server-dev-app:/var/log/logs ~/Downloads
```

Copy a directory named `logs` from `/var/log` on the server 192.168.1.10 to local `Downloads` directory