# grep 

> GREP = Global Regular Expression search & Print

![linux grep](https://i.pinimg.com/736x/37/7c/1f/377c1faac2c0a0a2dab716e0d030f941.jpg)

## Use cases

- **Log analysis**: Search log files for errors, warnings, or specific events.
- **Configuration file editing**: Find and modify specific settings in configuration files.
- **Code searching**: Locate specific functions, variables, or code patterns in source code.
- **Text file processing**: Extract or filter specific data from text files.
- **System administration**: Identify potential issues or monitor system activity by searching log files.

## Examples

Find all lines containing "error" in the file "system.log":

```sh
grep "error" system.log
```

### Search Multiple Files

Search for "config" in all .txt files in the current directory:

```sh
grep "config" *.txt
```

### Case-Insensitive Search
Find all occurrences of "admin" (ignoring case) in the file "users.txt":
```sh
grep -i "admin" users.txt
```

### Line Numbers

Print the line numbers and lines containing "root" in "passwd":
```sh
grep -n "root" passwd
```

### Regular Expressions
Find all lines starting with a digit in "data.csv":

```sh
grep "^[0-9]" data.csv
```

### Counting Matches

Count the number of lines with "warning" in "messages.log" (without showing the lines):

```sh
grep -c "warning" messages.log
```