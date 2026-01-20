
# Testing Express servers, user administration
- In this part, we write unit and integration tests for backned
- then implementing user authentication and authorization

## Structure of backend application, introduction to testing

### Project structure
An example backend tree with Node.js + Express, following "Separation pf Concers"
I cloned this example into Part3 testing

```
.
├── controllers
│   └── notes.js      # GET / POST / DELETE...
├── dist              # after-build files
│   └── ...
├── models
│   └── note.js       # database
├── utils         
│   ├── config.js     # handling of environment variables 
│   ├── logger.js     # console.log 
│   └── middleware.js # Route handlers
├── app.js
├── index.js          # Program starter
├── package-lock.json
├── package.json      # basic setting of the program
```

### Note on exports

### Testing Node applications
- unit test
- integration test
- Node has its own built-in test lib called node:test

## Testing the backend
- toJSON methond
- a lib used to mocking db is mongodb-memory-server 
- integration testing: testing where multiple components of the system are being tested as a group i

### Test environment
- It is common practice to define separate modes for development and testing.
- add in the package.json scripts part
- and "npm install cross-env"

```json
    "start": "cross-env NODE_ENV=production node index.js",
    "dev": "cross-env NODE_ENV=development node --watch index.js",
    "test": "cross-env  NODE_ENV=test node --test",
```
- and it is better to run tests using a seperate database, change it in utils/congig.js

```json
const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
```
### supertest
- installation: "npm install --save-dev supertest"

### Initializing the database before tests
- beforeEach(): reset the database, making sure every tests starts with the same data
- test: run API assertions
- after: close db connections

### Running tests one by one
- npm test: execute all of the tests for the app
- but how to run them one by one:
    -   only: test.only(...), then "npm test -- --test-only"
    -   specify which test: "npm test -- tests/note_api.test.js"

### async/await
- callback Hell: in js, operations can be asynchronous, eg find.then(...)
- async/await: makes the process looks like synchronous
    - await can only be used for promises
    - await can only be used within async

### async/await in the backend
- originally
```js
notesRouter.get('/', (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes)
  })
})
```
- after using async/await 
```js
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes)
})
```

### Refactoring the route responsible for adding a note

### Refactoring the route responsible for fetching a single note

### Refactoring the route responsible for deleting a note

### Optimizing the beforeEach function

### Refactoring tests

### A true full stack developer's oath
- I will have my browser developer console open all the time
- I will use the network tab of the browser dev tools to ensure that frontend and backend are communicating as I expect
- I will constantly keep an eye on the state of the server to make sure that the data sent there by the frontend is saved as I expect
- I will keep an eye on the database: does the backend save data there in the right format
- I will progress in small steps
- I will write lots of console.log statements to make sure I understand how the code and the tests behave and to help pinpoint problems
- If my code does not work, I will not write more code. Instead, I start deleting the code until it works or just return to a state when everything is still working
- If a test does not pass, I make sure that the tested functionality for sure works in the application
-  I ask for help in the course Discord channel or elsewhere I formulate my questions properly, see here how to ask for help

##  User administration

## Token authentication