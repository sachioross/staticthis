# Static This

This is a very simple node module that is installed globally and can be used to quickly start a static-web server for any directory. 

Simple use-cases that come to mind: 

- Rapid preview of an in-development website
- Show web files, such as JS and CSS, directly in the web-browser without needing to show the file:// protocol with the complete path to that file
- View technical documentation that may be in HTML format, such as javadocs

## Installation

```
npm install -g staticthis
```

## Usage

For the current directory: 
```
staticthis
```

To run on a different port (default is 9100) and to use a different directory:

```
staticthis -p 1234 -d public
```
... optionally ...

```
staticthis -p 1234 -d ./public
```
... and finally...

```
staticthis -p 1234 -d /usr/local/var/www
```
