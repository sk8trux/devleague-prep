# devleague-prep

4 major parts here:

1. Toolbox (aka. dev environment setup)
2. Command line primer
3. Git primer
4. JavaScript primer

The primers are *not* comprehensive, but should be enough to get started...


# Toolbox

1. **Communication:** Slack
2. **Language:** JavaScript
3. **CLI (Terminal + Shell):** iTerm + zshell (Mac) or Git Bash (Windows)
4. **Editor (with Linter):** Sublime Text 3
5. **Source Version Control:** Git + Github
6. **Runtime:** Node (and later a browser)


# 1. Slack

This is how we will communicate when we are not using our voices.

This is the leading contender to replace internal corporate email.  It (or its competitor HipChat) is what software development companies are using.

Has lots of nice features for developers:

* Easy file sharing
* Nice code snippets in chat messages
* Developer tool integrations


# 2. JavaScript

## What is a programming language?

A human-readable and computer-interpretable syntax for getting the computer to do stuff.

> Remember the target audience for your code is *people*.
TODO: link to airbnb style guide?

## Why JavaScript?

JavaScript is one such language that every computer in the world (with an Internet browser) is already able to run.

i.e. it is the language of the web

(see JavaScript primer... TODO)

1. basics
2. [functions](https://github.com/megesdal/devleague-prep/blob/master/functions.js)
3. logic


# 3. CLI (Command Line Interface)

## Terminal

A terminal (or terminal *emulator* in the case of modern machines) is just the window that manages the command line interface.

It draws characters to the screen (sometimes with colors) and handles keypresses.

## Shell

The shell is sent keypresses from the terminal (via `stdin`), and sends characters to the terminal to be drawn (via `stdout`).

The shell handles all actual running of command line programs.

### iTerm2

Better (my opinion) terminal for Mac

### zshell

Better (opinion) shell for Mac (and Linux)

### Git Bash

* Git for Windows = MinGW + Git

* *Terminal:* Mintty (sp?) is the terminal (**select this during install**)

* *Shell:* MYSYS (part of MinGW) has a version of `bash`

> Mark sure you are **NOT** using Git CMD!

# 4. Editor

## Sublime Text 3

link

> On Mac OSX make sure you actually install it to your Applications folder!!!

## `subl` set up

Mac: `ln -s /Applications/Sublime\ Text\ 3.app/Content/SharedSupport/bin/subl /usr/local/bin/subl`

Windows: System -> Advanced -> Environment Variables

### What are environment variables?

Variables containing string values that the shell and programs that run from the shell have access to.

> With Node we can do:
```
console.log(process.env);
```

### What is the PATH?

A list (technically a string that can be split into a list with either the ':' or ';' characters on Mac OSX/\*nix or Windows respectively) of directory paths to check when given the name of a program to run.

> With Node we can do:
```
console.log(process.env.PATH);
```

## SublimeLinter

> Won't work until Node is installed


# 5. Source Version Control

## Git

The standard for track
