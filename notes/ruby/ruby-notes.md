# Ruby notes 

All ruby files will have extension `.rb`



## Package manager - [rbenv](https://github.com/rbenv/rbenv)

```
brew install rbenv ruby-build
```

Edit `.bash_profile` 
```
echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' >> ~/.bash_profile
```

Checking version
```
which ruby
exec bash --login # which to bash
env | grep PATH
```

```
# list all local versions:
rbenv install -L

# install a Ruby version:
rbenv install 2.7.6

# set the default Ruby version for this machine
rbenv global 2.7.6
# or:
rbenv local 2.7.6   # set the Ruby version for this directory
```


```
gem install bundler
```



## Compare to NodeJs

| NodeJs  | Ruby |
|------   | ------ |
| npm     | [bundler](https://bundler.io/guides/rationale.html#bundlers-purpose-and-rationale) |
| n       | [rbenv](https://github.com/rbenv/rbenv) | 



https://stackify.com/install-ruby-on-your-mac-everything-you-need-to-get-going/