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

## Types
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