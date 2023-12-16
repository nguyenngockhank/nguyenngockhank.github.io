# SSH Notes

## What happens when you type 'ssh hostname'

![ssh hostname](https://lh3.googleusercontent.com/pw/ABLVV86bJ6fDk3SBXRevydR5vn2MLs5XdXAqFiXvWReFG6MZ7W5_awl18ZO5d3fueBA0IjIK0bJadHyBq12cgW307JRsBf6l8K2t5AzVav5xCSr04P2jHOI=w2400)

In the 1990s, Secure Shell was developed to provide a secure alternative to Telnet for remote system access and management. Using SSH is a great way to set up secure communication between client and server because it uses a secure protocol.

The following happens when you type "ssh hostname":
- 🔹 Hostname resolution: Convert the hostname to an IP address using DNS or the local hosts file.
- 🔹 SSH client initialization: Connect to the remote SSH server.
- 🔹 TCP handshake: Establish a reliable connection.
- 🔹 Protocol negotiation: Agree on the SSH protocol version and encryption algorithms.
- 🔹 Key exchange: Generate a shared secret key securely.
- 🔹 Server authentication: Verify the server's public key.
- 🔹 User authentication: Authenticate using a password, public key, or another method.
- 🔹 Session establishment: Create an encrypted SSH session and access the remote system.

Make sure you always use key-based authentication with SSH for better security, and learn SSH configuration files and options to customize your experience. Keep up with best practices and security recommendations to ensure a secure and efficient remote access experience.