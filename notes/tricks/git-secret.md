# Git secret

A tool that helps you store private data in git repo. 

[Read more](https://sobolevn.me/git-secret/)

## Install gnupg to gen a key

GnuPG is a cryptography tool that helps you manage public and private keys as well as perform encrypt, decrypt, sign, and verify operations.

[gpg tutorial](https://www.devdungeon.com/content/gpg-tutorial)

```
brew install gnupg
gpg --gen-key
```


## Install git-secret

```
brew install git-secret
git-secret init
```

## Add file to enscript

Right click on file > `Copy relative path`

```
git-secret add <path-to-file> (Ctrl + V)
```

## Add someone to see the secrets

```
gpg --import my-private.pgp
gpg --import my-public.pgp
git-secret tell someone@email.id
```

## Generate a key

```
gpg --gen-key
```


## Export & import private key

- List all key `gpg --list-secret-keys`
- Export public key `gpg --output my-public.pgp --armor --export khanh@murdoch-partners.com`
- Export private key `gpg --output my-private.pgp --armor --export-secret-key khanh@murdoch-partners.com`
