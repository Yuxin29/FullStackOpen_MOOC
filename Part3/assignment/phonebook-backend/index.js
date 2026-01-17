
//import http from 'http';
import express from 'express';
const app = express()

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
app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  phonebook = phonebook.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)