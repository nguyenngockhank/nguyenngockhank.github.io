# Linux network tools

## Networking tools

![Networking tools](https://i.pinimg.com/originals/c4/43/ff/c443ff43401968352c102d21972ca902.png)

- ping
- curl
- httpie
- wget: download files
- tc
- dig / nslookup
- `whois`: check domain registered
- `ssh`: secure shell
- `scp`: copy files (over ssh)
- `rsync`: copy only changed files (over ssh)
- ngrep: grep ur network
- tcpdump: show me all packets on port 80
- wireshark
- tshark
- tcpflow
- ifconfig: what is my IP address
- route: view for change the route table
- `ip`: replace ifconfig, route, ...
- arp: see ARP table
- mitmproxy: spy on SSL connections ur programs r making
- `nmap`: scanning ports
- zenmap: GUI for nmap
- `p0f`: identify OS of hosts connecting to you
- openvpn: a VPN
- wireguard: newer VPN
- nc: netcat, make TCP connections manually
- socat: proxy a TCP socket to a unit domain socket ...
- `telnet`: like ssh but insecure
- fpt / sftp: copy files 
- netstat / ss / `lsof` / `fuser`: what ports are servers using
- `iptables`: setup firewalls & NAT
- nftables: new version of iptables
- hping 3: construct any TCP packet u want
- traceroute / mtr: what servers are on the way to that server
- tcptraceroute: use tcp packets instead of `icmp` to `traceroute`
- ethtool
- iw / iwconfig
- sysctl
- `openssl`: do literally anything with SSL certificates
- `stunnel`: make a SSL proxy for an insecure server
- iptraf / nethogs / iftap / ntap
- ab / nload / iperf: benchmarking tools
- ipcalc
- nsenter: enter a container process's network namespace

## Find & kill Process Id

**Way 1**: Using `fuser`
```sh
fuser -k 80/tcp
```
- `-k`: kill 

**Way 2**: Using `fuser`
```sh
pid=$(lsof -t -i :80) && kill $pid
```
- `-t`: TCP connections
- `-i`: filter 

It's recommended to use the first method (`fuser -k 80/tcp`) as it directly terminates the process. The second method might require additional parsing depending on the output of `lsof`.


