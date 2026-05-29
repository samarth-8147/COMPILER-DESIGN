# COMPILER-DESIGN

# COMPILER DESIGN SIMULATOR

## Overview

Compiler Design Simulator is a mini-project that demonstrates the basic phases of a compiler, including Lexical Analysis and Syntax Analysis. The application allows users to enter source code, perform tokenization using a lexer, and validate program structure using a parser.

## Features

* Lexical Analysis (Lexer)
* Syntax Analysis (Parser)
* Symbol Table Generation
* Keyword Identification
* Operator Detection
* Identifier Recognition
* Program Validation
* User-Friendly Web Interface
* Output Export as PDF

## Technologies Used

* HTML
* CSS
* JavaScript
* C Programming
* Lexical Analysis Concepts
* Parsing Techniques

## Project Structure

COMPILER-DESIGN-SIMULATOR/

├── index.html

├── style.css

├── script.js

├── input.txt

├── lexer.c

├── parser.c

└── README.md

## Modules

### Lexical Analyzer

The lexical analyzer scans the input program and identifies:

* Keywords
* Identifiers
* Operators
* Numbers

It also generates a Symbol Table containing unique identifiers.

### Parser

The parser validates the program structure based on predefined grammar rules:

* Presence of `int main()`
* Presence of `begin` and `end`
* Presence of `while` loop
* Presence of `return` statement

If all rules are satisfied, the program is considered valid.

## Sample Input

```text
int main()
begin
 int count=1;
 while(n>1)
 count=count+1;
 n=n/2;
 end while
return count
end
```

## How to Run

### Compile Lexer

```bash
gcc lexer.c -o lexer
lexer
```

### Compile Parser

```bash
gcc parser.c -o parser
parser
```

### Run Web Interface

Open `index.html` in any web browser.

## Applications

* Compiler Design Laboratory
* Educational Demonstrations
* Token Analysis
* Syntax Checking
* Academic Projects

## Future Enhancements

* Semantic Analysis
* Intermediate Code Generation
* Code Optimization
* Parse Tree Visualization
* Error Recovery Mechanism
* Support for Additional Language Constructs

## Author

Samarth Patil

## License

This project is intended for educational and learning purposes.


