# Ansible

## Architecture

![ansible architectuer](https://i.pinimg.com/736x/76/be/4a/76be4a0c1e2f0c98f12f1af2a2093ec3.jpg)

## Commands 

### Install 

**pip** & **ansible**

```sh
python3 -m pip install --upgrade pip
pip install ansible

# OR
brew install ansible
```

### Invertory file

`invertory.ini`

```
[myhosts]
server-dev
server-uat
```


At `~/.ssh/config`

```
Host server-dev
    Hostname 13.213.xxx.xxx
    User ubuntu
    Port 22
    IdentityFile ~/.ssh/my-key.pem
Host server-uat
    Hostname 13.123.xxx.xxx
    User ubuntu
    Port 22
    IdentityFile ~/.ssh/my-key-2.pem
```

### Verify inventory

```sh
ansible-inventory -i inventory.ini --list
```


### Execute a command on servers
```sh
ansible myhosts -m command -a "pwd" -i inventory.ini
```

### Copy a file to the servers

```sh
ansible multi -m copy -a "src=/etc/hosts dest=/tmp/hosts"
```

### Retrieve a file from the servers

```sh
ansible multi -b -m fetch -a "src=/etc/hosts dest=/tmp"
```

## Playbook

Execute on 

```sh
ansible-playbook playbook.yml -i inventory.ini  --limit server-dev
```

Content file `playbook.yml`
```yml
- hosts: server-dev
  become: yes

  tasks:
    - name: Fetch .env files
      fetch:
        src: "{{ item.src }}"
        dest: "{{ item.dest }}"
      with_items:
        - src: /home/ubuntu/murdoch/dinamo-zagreb/dev/api.env
          dest: ./servers
        - src: /home/ubuntu/murdoch/dinamo-zagreb/dev/cms.env
          dest: ./servers
```