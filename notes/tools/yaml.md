# YAML notes

## Concepts

### Indentation

- YAML relies on indentation to define nesting levels. Increased indentation indicates a nested element within a list or dictionary.
- Consistent spacing (typically 2 or 4 spaces) is crucial, and mixing tabs and spaces is not allowed.

### Lists

- Represented by a hyphen (`-`) followed by a space at the beginning of each line in the list.
- **Order** matters in lists, the first element is accessed first

```yml
# This defines a list with two elements
  - Element 1
  - Element 2

# This defines a dictionary with two key-value pairs
name: John Doe
age: 30

# Nested element within a list
  - Sublist:
      - Item A
      - Item B
```

### Key-Value Pairs (Mappings)

- Defined with a colon (`:`) separating the key and value.
- Keys are unique identifiers within a mapping (dictionary-like structure).
- Order generally doesn't matter in mappings.

```yml
person:
  name: Alice
  age: 25
  occupation: Programmer

# Accessing the value for key "occupation"
occupation = person["occupation"]
```

### Folding and Literal Scalars

- YAML allows folding long strings (using the `>` character) to keep the code readable.
- Literal scalars (using `|` character) preserve newlines and whitespace within the string value.

```yml
# Long string with folding (preserves whitespace on the same line)
message: This is a very long message > that would otherwise wrap to the next line 
  but is kept on a single line for readability.

# Literal scalar with newlines preserved
description: |
  This is a description
  with multiple lines
  and preserved whitespace.
```

### Advanced Techniques

- YAML anchors (denoted by `&`) and aliases (denoted by `*`) allow referencing and reusing complex data structures within the YAML document.
- While YAML doesn't have arithmetic or comparison operators, it offers these core mechanisms for building and managing data structures.

```yml
# Define a base structure with an anchor
base: &common_data
  key1: value1
  key2: value2

# Reuse the base structure with an alias
user1:
  <<: *common_data  # Inherits everything from the base
  username: user_01

user2:
  <<: *common_data  # Reuses the base again
  username: user_02
```

## Data serialization language comparision

![JSON vs YAML vs XML](https://i.pinimg.com/originals/fb/d9/a8/fbd9a8d19df0b604b7f3e92f801783dd.jpg)