
# Programming a server with NodeJS and Express
We will implement a simple REST API in Node.js by using the Express library,  and the application's data will be stored in a MongoDB database

## terminalogies 

### API ("Application Programming Interface")
- An API is a set of rules that allows different software applications to communicate with each other. Think of it as a bridge that lets one program ask another for data or services.
### REST API ("Representational State Transfer")
- REST is a design style for creating APIs that are simple, consistent, and scalable.
- Uses HTTP methods: GET (read), POST (create), PUT/PATCH (update), DELETE (delete).
- Data is usually sent and received in JSON format.
### Javascript 
- In FullStackOpen, We write server-side logic in JavaScript to handle requests, process data, and interact with databases.
### Typescript
- TypeScript is a superset of JavaScript that adds static typing. This helps catch errors during development before running the code.
### Node.js
- Node.js is a runtime environment that lets you run JavaScript on the server.
### Express
- A light-weight web framework built on top of Node.js
### MongoDB
- a NoSQL database that stores data as JSON-like documents
### how are they all relate
Frontend (or client) → HTTP request → REST API (Express + Node.js + TypeScript) → MongoDB → REST API response → Frontend displays data

##  Node.js and Express

### Simple web server
- in the root folder, if we create a index.js
- put the hard-corded info into it 
``` js
const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```
- and add in package.json in the 
``` json
"scripts": {
    "start": "node index.js",
    ...
  }
```
- and start by "npm start" / "node index.js"
->  I built a mini backend

### Express
- install it by "npm install express"
- update it by "npm update"

### Web and Express
- for "npm start" / "node index.js", we need to manuallt restart it whenever sth small changed
- automatic change in next part

### Automatic Change Tracking
- how: "node --watch index.js"
- or: add in scripts: "dev": "node --watch index.js",
- and then: npm run dev

### REST
- REST: Representational State Transfer
- in REST, every thing is called as "resource", eg notes, every resource has its own uri
- http methods: get, post, delete, put, patch
- REST emphasizes on Uniform Interface

### Fetching a single resource


### Deleting resources


### Postman


### The Visual Studio Code REST client


### The WebStorm HTTP Client


### Receiving data


### About HTTP request types


### Middleware




## Deploying app to internet

## Saving data to MongoDB

## Validation and ESLint
