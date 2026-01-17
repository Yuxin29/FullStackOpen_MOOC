
//import http from 'http';
import express from 'express';
const app = express()
app.use(express.json())

let phonebook = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello This is my phonebook 3.1 - 3,3 !</h1>')
})

// ex 3.1
app.get('/api/persons', (request, response) => {
  response.json(phonebook)
})

// ex 3.2
app.get('/info', (request, response) => {
    const count = phonebook.length
    const time = new Date()
    response.send(
        `<p>Phonebook has info for ${count} people</p>
        <p>${time}</p>`
    )
})

// ex 3.3
app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = phonebook.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

// ex 3.4
// Implement functionality that makes it possible to delete a single phonebook entry 
// by making an HTTP DELETE request to the unique URL of that phonebook entry.
// Test that your functionality works with either Postman or the Visual Studio Code REST client.
app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  phonebook = phonebook.filter(person => person.id !== id)

  response.status(204).end()
})

// 3.5: Phonebook backend step 5
// Expand the backend so that new phonebook entries can be added 
// by making HTTP POST requests to the address http://localhost:3001/api/persons.
// Generate a new id for the phonebook entry with the Math.random function. 
// Use a big enough range for your random values 
// so that the likelihood of creating duplicate ids is small.
app.post('/api/persons', (request, response) => {
    const body = request.body

    // extra error handling in 3.6
    if (!body.name || !body.number) {
        return response.status(400).json({ 
            error: 'name or number is missing' 
        })
    }
    const nameExists = phonebook.find(person => person.name === body.name)
    if (nameExists) {
        return response.status(400).json({ 
            error: 'name must be unique' 
        })
    }
    // end of extra error handling in 3.6

    const person = {
        id: (Math.random() * 1000000).toFixed(0),
        name: body.name,
        number: body.number,
    }
    phonebook = phonebook.concat(person)
    response.json(body)
})

// 3.7: Phonebook backend step 7

// Add the morgan middleware to your application for logging. Configure it to log messages to your console based on the tiny configuration.

// The documentation for Morgan is not the best, and you may have to spend some time figuring out how to configure it correctly. However, most documentation in the world falls under the same category, so it's good to learn to decipher and interpret cryptic documentation in any case.

// Morgan is installed just like all other libraries with the npm install command. Taking morgan into use happens the same way as configuring any other middleware by using the app.use command.
// 3.8*: Phonebook backend step 8

// Configure morgan so that it also shows the data sent in HTTP POST requests:
// terminal showing post data being sent

// Note that logging data even in the console can be dangerous since it can contain sensitive data and may violate local privacy law (e.g. GDPR in EU) or business-standard. In this exercise, you don't have to worry about privacy issues, but in practice, try not to log any sensitive data.

// This exercise can be quite challenging, even though the solution does not require a lot of code.

// This exercise can be completed in a few different ways. One of the possible solutions utilizes these two techniques:

//     creating new tokens
//     JSON.stringify


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)