
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


## Testing the backend

##  User administration

## Token authentication