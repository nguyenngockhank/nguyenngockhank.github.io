# Email protocols

## SMTP (Simple Mail Transfer Protocol)

Sending emails from a client to a mail server or between mail servers.

**Port:**
- 25 → Standard, mostly for server-to-server
- 587 → Modern submission from client to server (with authentication)
- 465 → SMTPS (SMTP over SSL/TLS)

**How it works:**
1. You write an email in a client (like Outlook or Gmail).
2. SMTP sends it to your outgoing mail server.
3. Server forwards it to the recipient’s mail server.

Note: SMTP is only for sending, not for receiving.

## POP3 (Post Office Protocol version 3)

Retrieving emails from a server to a client.

**Port:**
- 110 → Default
- 995 → POP3 over SSL/TLS


**How it works:**
1. Client connects to the server.
2. Downloads all emails.
3. Usually **deletes emails from the server** after download (can be configured to leave a copy).

🟢 Use case: Good if you want to store emails locally and access them offline.

## IMAP (Internet Message Access Protocol)

Retrieving emails while keeping them on the server, allowing multi-device access.

**Port:**
- 143 → Default
- 993 → IMAP over SSL/TLS

**How it works:**
1. Client syncs with the server.
2. Emails stay on the server.
3. Actions (read, delete, move) sync across devices.

🟢 Use case: Best for **multiple devices** (phone, tablet, PC).

## MIME (Multipurpose Internet Mail Extensions):

It’s not an email protocol (like SMTP, POP3, or IMAP), but rather a **standard that extends email format** so it can carry more than just plain text.

Originally, email (as defined by **RFC 822**) only supported:
- ASCII text
- No attachments
- No formatting (no bold, color, etc.)

MIME changed that by allowing:
- ✅ Attachments (images, PDFs, ZIPs, etc.)
- ✅ Rich text (HTML email, bold/italic, color)
- ✅ Unicode support (non-English text)
- ✅ Multiple parts in one message (e.g., plain text + HTML version)

### How MIME works

When you send an email, your mail client encodes it according to the MIME format before sending via SMTP. It adds **special headers** to describe what kind of content the message contains.

```
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="boundary123"

--boundary123
Content-Type: text/plain; charset="UTF-8"

Hello, here is the report you asked for.

--boundary123
Content-Type: application/pdf; name="report.pdf"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="report.pdf"

JVBERi0xLjQKJeLjz9MKMiAwIG9iago8PAov...
--boundary123--
```

## Exchange ActiveSync (EAS)

Proprietary protocol for syncing emails, contacts, calendar, mainly in Microsoft environments.

## Email-Related DNS Records 

| **Record Type** | **Purpose / Description** |
|------------------|----------------------------|
| **MX** | Specifies which mail server receives incoming emails for the domain. |
| **A** | Maps the mail server’s hostname to its IPv4 address. |
| **AAAA** | Maps the mail server’s hostname to its IPv6 address. |
| **TXT (SPF)** | Defines which mail servers are authorized to send emails for the domain (anti-spoofing). |
| **TXT (DKIM)** | Publishes a public key used to verify that outgoing emails haven’t been tampered with. |
| **TXT (DMARC)** | Tells receiving mail servers how to handle messages that fail SPF/DKIM checks and where to send reports. |
| **PTR** | Provides reverse DNS lookup — ensures the mail server’s IP matches its domain (used for spam prevention). |
| **TXT (MTA-STS)** | Announces that the domain enforces secure SMTP delivery using TLS. |
| **CNAME (DKIM selector)** | Delegates DKIM key hosting to another mail provider or subdomain. |

**Quick Notes**:
- TTL (Time To Live): How long DNS resolvers cache the record (in seconds).
- Priority: Only applies to MX (lower = higher priority).
- SPF, DKIM, DMARC are all stored as TXT records even though they serve different authentication functions.
    - SPF: Sender Policy Framework
    - DKIM:  DomainKeys Identified Mail
    - DMARC: Domain-based Message Authentication, Reporting, and Conformance
- PTR must be configured by the mail server’s IP owner (ISP or hosting provider).
- MTA-STS (and newer TLS-RPT) enhance secure SMTP delivery over TLS.


## Email Authentication Checklist 

Receiving Server Flow

### 1️⃣ Check SPF (Sender Policy Framework)

Goal: Verify the sending server’s IP is authorized to send mail for the claimed domain.

- ✅  Extract domain from the “**Return-Path”** (envelope-from).
- ✅  Query DNS for that domain’s SPF TXT record (`v=spf1 ...`).
- ✅  Compare sending IP to allowed IPs in SPF record.
- ✅  Record SPF result → `pass`, `fail`, `softfail`, or `neutral`.

🔸 Example:

If email claims `Return-Path: sender@example.com` → DNS lookup:

```
example.com. TXT "v=spf1 ip4:203.0.113.5 include:_spf.google.com -all"
```

###  2️⃣ Check DKIM (DomainKeys Identified Mail)

Goal: Verify that the message hasn’t been altered and truly came from the domain that signed it.

- ✅ Look for the **DKIM-Signature** header in the email.
- ✅ Extract the **selector** (e.g. `s=google`) and domain (e.g. `d=example.com`).
- ✅ Query DNS for `selector._domainkey.example.com` to get public key.
- ✅ Use public key to verify the cryptographic signature.
- ✅ Record DKIM result → `pass` or `fail`.

### 3️⃣ Check DMARC (Domain-based Message Authentication, Reporting & Conformance)


Goal: Decide what to do if SPF/DKIM fail, and ensure the “From” header aligns with authentication results.

- ✅ Extract the **domain from the From header** (e.g. From: `support@example.com`).
- ✅ Query DNS for `_dmarc.example.com` TXT record.
- ✅ Verify domain alignment:
    - SPF alignment → Does the SPF domain = From domain?
    - DKIM alignment → Does the DKIM domain = From domain? 
    -  Apply DMARC policy (p=):
        - `none` → deliver normally
        - `quarantine` → move to spam
        - `reject` → block / bounce message
    - Log DMARC result and generate aggregate report (optional).


#### Combine Results and Decide
SPF | 	DKIM | 	DMARC Policy |	Likely Action
---- | ----- | ----------- | --------
pass |	pass |	any         | 	✅ deliver (inbox)
pass |	fail |	p=none	    |  ⚪ deliver (monitored)
fail |	pass |	aligned	    |  ✅ deliver
fail |	fail |	p=quarantine | 	🚫 move to spam
fail |	fail |	p=reject	|  ❌ reject message