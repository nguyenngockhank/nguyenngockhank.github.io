# Network devices

https://www.geeksforgeeks.org/network-devices-hub-repeater-bridge-switch-router-gateways/


![Devices on OSI](https://cdn.comparitech.com/wp-content/uploads/2021/02/OSI-to-TCPIP-stack-scaled.webp)

## Repeater
- regenerate the signal over the same network before the signal becomes too weak or corrupted to extend the length to which the signal can be transmitted over the same network

## Hub
- A hub is a basically multi-port repeater
- A hub connects multiple wires coming from different branches

## Bridge
- Data Link (Layer 2) device
- A bridge is a repeater, with add on filtering content by reading the MAC addresses of the source and destination.


## Router
- A router is a device like a switch that routes data packets based on their IP addresses.
- Routers connect 2 or more networks, each of which must have a unique network number in order for routing to be succesful
- Has many IPs, because has many NIC
- find the most efficient path for delivery of data on network

## Switch
- Has no IP address, only MAC address

## NIC
- NIC card is a layer 2 device
- network interface card is a network adapter that is used to connect the computer to the network.
-  It is installed in the computer to establish a LAN. 

## Hub vs Switch vs Router

Features | Hub | Switch | Router
---------| ----| -------| ------
OSI layer | 1  | 2   | 3
type | broadcast device | multicast device | routing device
connect devices |  same network |  same network | different networks
send data at same time | only 1 device | multiple devices | multiple devices
stored info | not any info | MAC addresses | IP addresses 


## Router vs Switch

Features |  Router | Switch 
-------- | -------- | -----------
speed    | slower   | faster
ISO layer | layer 3 | layer 2
addressing used | IP  | MAC
broadcasts | Blocks | Forwards
security   | high    | lower