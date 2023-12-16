# Password notes

## How to store passwords in DB?

![Store password](https://lh3.googleusercontent.com/pw/ABLVV87gpszwDxjo3_IjDla_nYuJ2nOcDAgXYqZOPqwtVlGt7jcH80o3MAzyy26LrsXCnKsu08rTKOdyKlPhsf6AzV0-EWMqVgrbHhxq0HhkHCXONjWQ1nE=w2400)

### 𝐓𝐡𝐢𝐧𝐠𝐬 𝐍𝐎𝐓 𝐭𝐨 𝐝𝐨:
- **Storing passwords in plain text** is not a good idea because anyone with internal access can see them.
- **Storing password hashes directly** is not sufficient because it is pruned to precomputation attacks, such as rainbow tables. To mitigate precomputation attacks, we salt the passwords.

### 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐬𝐚𝐥𝐭? 

According to OWASP guidelines, *“a salt is a unique, randomly generated string that is added to each password as part of the hashing process”*.

### 𝐇𝐨𝐰 𝐭𝐨 𝐬𝐭𝐨𝐫𝐞 𝐚 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐚𝐧𝐝 𝐬𝐚𝐥𝐭? 

- 1️⃣ A salt is not meant to be secret and it can be stored in plain text in the database. It is used to ensure the hash result is unique to each password.
- 2️⃣ The password can be stored in the database using the following format: **hash(password + salt)**
 
### 𝐇𝐨𝐰 𝐭𝐨 𝐯𝐚𝐥𝐢𝐝𝐚𝐭𝐞 𝐚 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝?

To validate a password, it can go through the following process:
- 1️⃣ A client enters the password.
- 2️⃣ The system fetches the corresponding salt from the database.
- 3️⃣ The system appends the salt to the password and hashes it. Let’s call the hashed value H1.
- 4️⃣ The system compares H1 and H2 (H2 is the hash stored in the database). If they are the same, the password is valid

## How does a Password Manager such as 1Password or Lastpass work?

How does it keep our passwords safe?

![password manager](https://lh3.googleusercontent.com/pw/ABLVV84FVIrAVOaSsNvQ0HU4wY8-ZXjqlPefueEgJn3V0oazhFK0MAoXqlXYS5Ai9iNS2MSmKP9EYLLhmcoLBIGE4W2lqApGJ46T_FAL6nrmgwVQ90rWARE=w2400)


A password manager generates and stores passwords for us. We can use it via application, browser extension, or command line.

Not only does a password manager store passwords for individuals but also it supports password management for teams in small businesses and big enterprises.

Let’s go through the steps.

- **Step 1**: When we sign up for a password manager, we enter our email address and set up an account password. The password manager generates a secret key for us. The 3 fields are used to generate **MUK (Master Unlock Key)** and **SRP-X** using the 2SKD algorithm. MUK is used to decrypt vaults that store our passwords. Note that the secret key is stored locally, and will not be sent to the password manager’s server side.
- **Step 2**: The MUK generated in Step 1 is used to generate the encrypted MP key of the primary keyset.
- **Steps 3-5**: The MP key is then used to generate a private key, which can be used to generate AES keys in other keysets. The private key is also used to generate the vault key. Vault stores a collection of items for us on the server side. The items can be passwords notes etc.
- **Step 6**: The vault key is used to encrypt the items in the vault.

Because of the complex process, the password manager has no way to know the encrypted passwords. We only need to remember one account password, and the password manager will remember the rest.

## Policies

https://www.securden.com/blog/top-10-password-policies.html