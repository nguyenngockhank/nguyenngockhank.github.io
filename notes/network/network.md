# Network 


## Components in Network

- End devices (hosts): phone, tv, printer, ...
- Media: line, cables, ...
- Protocol

![device icons](./img/network-device-icon-4.jpg)

## Data Network 

### Categories by Geo
![network compare](./img/lan-vs-wan-vs-man-mc-slide1.png)

- LAN: Local Area Network
- WAN: Wide Area Network
- MAN: Metropolitan Area Network 
- GAN: Global Area Network (continents connection)
- SAN: Storage Area Network (peformance + Availability + Scalability)
- VPN: Virtual Private Network

Param | LAN | WAN
------| ----| -----
Speed | high, upto 1-10 Gbps | much lower, generally 100 mbps
Congestion | Less congested | More congested
Components | using the layer 1/2 devices like hubs, swiches, brigdes & layer 3 devices like Core/Layer 3 switch | using the layers 3 devices Routers & Multi-layer Switches 
Ownership & management | owned, operated, managed & monitored by a customer | by multiple Service providers 
Security  | More secured  | Less secured
Technologies | Ethernet & Token Rings | MPLS, ATM, Frame replay & ISDN, ...
Cost         | Less expensive  | More expensive
Physical layer connectivity | Generally Copper & Fiber medium. Multimode Fider is preferred. | Fiber medium. Single mode Fiber is preferred

### WAN vs LAN vs PAN vs MAN
![WAN, LAN, PAN, MA](https://i.pinimg.com/originals/ee/ab/1b/eeab1b7bf4972150ba3ea132178f9413.jpg)

### Categories by switching

![network compare](./img/switch-compare.png)

### VPN (Virtual Private Network)

**Connect objects**
- Headquarter
- Branch
- Home user
- Mobile user (laptop, mobile)

https://www.slideshare.net/OECLIBOdishaElectron/virtual-private-networks-vpn-ppt

**Types** :
- Network to network (Site to Site)
    - Intranet: network same company
    - Extranet: network between multi companies
- User to Network (Remote-Access VPN) (POP)

## Media

**LAN Media**
- đồng trục
- xoắn đôi
- cáp quang
- vô tuyến

![lanmedia](./img/lanmedias.png)

**WAN Media**
- modem (dial-up)
- public data network service (VPN, Frame-relay)
- đường thuê bao dùng riêng (Leasedline based on bandwidth)

![wanmedia](./img/wanmedias.png)

## Models

Communication Process

Source Address  ----- Protocol on Media ----- Destination Address

- **Addresses**: who are the source & destination of a communication process 
- **Media**: where is the communication take place
- **Protocols**: set of rules how to make communication on a network


### OSI vs TCP/IP

![osi vs tcpip](./img/tcpip-osi.jpg)

1. Physical: Binary transmission 
    - wires, connectos, voltages, data rates
2. Data Link: Access to media 
    - provides reliable transfer of data across media
    - physical addressing, logical network topology, error notification, flow control
3. Network: address & best path
    - provides connectivity & path selection between 2 end systems
    - domain of routing
4. Transport: e2e connections
    - concerned with transportation issues between hosts
    - data transport reliability
    - establish, maintain, terminate virtual circuits
    - fault detection & recovery infor flow control
5. Session: Dialog control - interhost communication
    - establish, maintain, terminate sessions between applications
    - half duplex / full duplex
6. Presentation: Data representation
    - ensure data is readable by receiving system
    - format of data
    - data structure
    - negotiates data transfer syntax for app layer
7. Application: network processes to apps

### Encapsulation Process

![encapsulation](./img/encapsulation-in-networking-process.jpg)

https://afteracademy.com/blog/what-is-data-encapsulation-and-de-encapsulation-in-networking/

### TCP vs UDP

![TCP vs UDP](https://ipcisco.com/wp-content/uploads/2018/10/tcp-vs-udp-comparison-ipcisco.com_.png)

- Checksum
- Acknowledgement
- Re-transmission (timeout & ACK dup)

### Layer 1 vs Layer 2

Layer 1 | Layer 2 
--------|---------
cannot organize streams of bit | uses framming to organize or group the bits
cannot identify computer | uses an addressing process to identify computer
cannot communicate with the upper-level layers | uses `LLC` to communicate with the upper-level laye
cannot decide which computer will transmit binary data | uses `MAC` to decide which computer will transmit


### TCP and UDP Application Ports
In networking, different ports are used for various purposes. Generally, these port ranges can be divided into three categories. Below, you can find these port ranges:
- Well-Known Ports ( 1 to 1024 )
*TCP Ports*
    - FTP Data (Port 20)
    - FTP Control (Port 21)
    - SSH (Port 22)
    - Telnet (Port 23)
    - SMTP (Port 25)
    - TACACS (Port 49)
    - HTTP (Port 80)
    - POP3  (Port 110)
    - SFTP (Port 115)
    - HTTPS (Port 443)
*UDP Ports*
    - DHCP & BOOTP Server (Port 67)
    - BOOTP User (Port 68)
    - TFTP (Port 69)
    - NTP (Port 123)
    - SNMP (Port 161)
    - SNMP Trap (Port 162)
    - Syslog (Port 512)
    - ISAKMP (Port 500)
- Registered Ports ( 1025 to 49151 )
- Private Ports ( 49152 to 65535 )

## Protocols

### Common protocols
![Popular Protocols](https://i.pinimg.com/originals/83/c2/92/83c2922614273368856c218de9a2971d.jpg)

![Network protocols](https://i.pinimg.com/originals/6c/d6/ae/6cd6ae665b0f748c124b29c19db38439.jpg)

### Common servers

![Common servers](https://i.pinimg.com/originals/a3/7c/8e/a37c8ea1c19e9d9dff701ce69f5f3988.jpg)

## Vokas 
- Round-trip time (RTT)
- Network Interface Card (NIC)
- 1 B (Byte) = 8 bit (b)  
- 1024 B = 1 KB
- Bandwith (bps - bit per second)
- Through put <= Bandwidth ( P (throughput) = S (size of file) / T (time to download) )
- LLC - Logical Link Control
- MAC - Media Access Control

## Tools
- [Decimal to Binary converter](https://www.rapidtables.com/convert/number/decimal-to-binary.html)
- [Visual Subnet Calculator](https://www.davidc.net/sites/default/subnets/subnets.html)
- [CIDR](https://cidr.xyz/)

## Refs 
https://viblo.asia/p/so-sanh-chi-tiet-tcp-va-udp-tai-sao-udp-lai-nhanh-hon-tcp-zOQJw05xLMP
