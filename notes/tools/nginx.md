# Nginx

Nginx is a high-performance **web server** and **reverse proxy** that can also function as a **load balancer**, **mail proxy**, and **HTTP cache**. It's renowned for its efficiency, reliability, and scalability, making it a popular choice for handling heavy traffic websites and applications.  

**Benefits** :
- High Performance: Handles a large number of concurrent connections efficiently.   
- Low Resource Consumption: Requires minimal system resources.   
- Stability: Known for its reliability and uptime.   
- Flexibility: Can be configured for various use cases.   
- Open Source: Free to use and modify.   

**Common Use Cases**
- Serving static content for websites   
- Offloading SSL/TLS encryption from application servers   
- Load balancing between multiple web servers   
- Caching content to improve performance   
- Acting as a reverse proxy for web applications   

**Ref**
- [Admin guide](https://docs.nginx.com/nginx/admin-guide/)

## Why popular?

![Nginx popular](https://i.pinimg.com/originals/dc/a2/cd/dca2cdd9c9a6510d8465ee6581f29f1a.jpg)

## Architecture 

Nginx employs a sophisticated **event-driven**, **asynchronous**, and **non-blocking** architecture that sets it apart from traditional web servers. This design enables it to handle a massive number of concurrent connections efficiently

![Nginx Architecture](https://i.pinimg.com/originals/e4/90/13/e49013fc1d3716ff1a6f0f01d9e11f9e.jpg)

### Core Components:
- **Master Process:**
    - Handles configuration loading and reloading.   
    - Manages worker processes.   
    - Monitors worker processes for errors.
- **Worker Processes:**
    - Handle client connections and requests.
    - Process requests asynchronously.   
    - Can be optimized for different tasks (e.g., handling static content, processing dynamic requests).


## Nginx as an API Gateway

Nginx can effectively function as an API gateway. While it's primarily known as a high-performance web server and reverse proxy, its capabilities extend to API management.

### **Key Features Making Nginx API Gateway**
- Reverse Proxy: Nginx excels at routing requests to multiple backend services, a core function of API gateways.
- Load Balancing: It can distribute traffic across multiple instances of backend services, ensuring high availability and performance.   
- Caching: Nginx can cache API responses to improve performance and reduce load on backend services.   
- SSL/TLS Termination: It can handle encryption, offloading the task from backend servers.   
- Rate Limiting: Nginx can be configured to limit the number of requests per client or IP address.   
- Authentication and Authorization: While basic authentication can be implemented, for more complex scenarios, consider additional tools or modules.

### Limitations
- **Limited Advanced Features**: Compared to dedicated API gateway solutions, Nginx might lack features like sophisticated service discovery, traffic management, and security policies.
- **Configuration Complexity**: Implementing complex API gateway logic can require extensive Nginx configuration.

## Notes 

### Redirect 

```sh
server {
    listen 80;
    server_name example.com;

    # Redirect from HTTP to HTTPS
    server_name example.com;
    return 301 https://$host$request_uri;

    # Redirect from www to non-www
    server_name www.example.com;
    return 301 https://example.com$request_uri;
}
```

### Install SSL 

**Prerequisites**
- An SSL/TLS certificate from a trusted Certificate Authority (CA). This typically includes:
    - The certificate file (`.crt`)
    - The intermediate certificate file (`.ca-bundle` or similar)
    - The private key file (`.key`)
- Access to your Nginx configuration file (usually /etc/nginx/sites-available/your_domain).

**Steps**
1. Obtain an SSL/TLS Certificate:
    - Purchase a certificate from a reputable CA.
    - Follow the CA's instructions to generate a Certificate Signing Request (CSR) and complete the validation process.
2. Combine Certificate Files:
    - Create a single file named combined.crt containing your certificate and intermediate certificates: `cat your_domain.crt intermediate.ca-bundle > combined.crt`
3. Configure Nginx:
    - Open your Nginx server block configuration file.
    - Add the following configuration within the server block:

```sh
server {

    listen   443;

    ssl    on;
    ssl_certificate    /etc/ssl/your_domain_name.pem; (or bundle.crt)
    ssl_certificate_key    /etc/ssl/your_domain_name.key;

    server_name your.domain.com;
    access_log /var/log/nginx/nginx.vhost.access.log;
    error_log /var/log/nginx/nginx.vhost.error.log;
    location / {
        root   /home/www/public_html/your.domain.com/public/;
        index  index.html;
    }
}
```

4. Redirect HTTP to HTTPS
5. Test and Reload Nginx: 
    - Test the Nginx configuration for errors: `sudo nginx -t`
    - Reload: `sudo systemctl reload nginx`

