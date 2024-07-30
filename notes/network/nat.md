# NAT

NAT = Network Address Translation
RFC 1631, 1918, 2663

**Functions**: 
- Imcomming: change the destination
- Ougoing: change the source

![functions](https://upload.wikimedia.org/wikipedia/commons/c/c7/NAT_Concept-en.svg)

**Terms** 

- Local network = inside
- Public internet = outside

## How NAT works

![How NAT works](https://i.pinimg.com/originals/3a/5a/a2/3a5aa24001f8de43f3c28e332a760919.jpg)


## Types

![NAT types](https://i.pinimg.com/564x/3e/12/3b/3e123b3a05bef70ef1b9f82105cee47c.jpg)

- Static: 1 local IP <--> 1 global IP
- Dynamic: 
    - n local IP <--> m global IP
    - NAT choose 1 available global IP 
- Overloading:
    - n local IP <--> 1 global IP
    - concurrent connection
    - NAT: `<local IP, local port>` <--> `<global IP, global port>`
- Overlapping
    - NAT: `<local IP, port>` <--> `<global IP, port>`
    - ouside can access inside actively