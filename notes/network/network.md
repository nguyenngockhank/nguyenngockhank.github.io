# Network 

## OSI vs TCP/IP

<table class="blog_table" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <th>
                Model Type
            </th>
            <th>
                OSI Layers
            </th>
            <th>
                Protocol Data Unit (PDU)
            </th>
            <th>
                TCP/IP Layers
            </th>
        </tr>
        <tr>
            <td rowspan="4">
                Host Layers
            </td>
            <td>
                Application Layer
            </td>
            <td rowspan="3">
                Data
            </td>
            <td>
                Application Layer
            </td>
        </tr>
        <tr>
            <td>
                Presentation Layer
            </td>
            <td>
                Session Layer
            </td>
        </tr>
        <tr>
            <td>
                Session Layer
            </td>
            <td>
                Application
            </td>
        </tr>
        <tr>
            <td>
                Transport Layer
            </td>
            <td>
                Segment (TCP) / Datagram (UDP)
            </td>
            <td>
                Transport Layer
            </td>
        </tr>
        <tr>
            <td rowspan="3">
                Media Layers
            </td>
            <td>
                Network Layer
            </td>
            <td>
                Packet
            </td>
            <td>
                Internet Layer
            </td>
        </tr>
        <tr>
            <td>
                Data Link Layer
            </td>
            <td>
                Frame
            </td>
            <td rowspan="2">
                Network Access Layer
            </td>
        </tr>
        <tr>
            <td>
                Physical Layer
            </td>
            <td>
                Bit
            </td>
        </tr>
    </tbody>
</table>


## TCP vs UDP

![TCP vs UDP](https://ipcisco.com/wp-content/uploads/2018/10/tcp-vs-udp-comparison-ipcisco.com_.png)

- Checksum
- Acknowledgement
- Re-transmission (timeout & ACK dup)

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

## Vokas 
- Round-trip time (RTT)

## Refs 
https://viblo.asia/p/so-sanh-chi-tiet-tcp-va-udp-tai-sao-udp-lai-nhanh-hon-tcp-zOQJw05xLMP
