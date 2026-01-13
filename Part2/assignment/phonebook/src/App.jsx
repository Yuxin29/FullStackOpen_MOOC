import { useState, useEffect, use } from 'react'
import axios from "axios"

// ====================================
// ex 2.6-2.9
// ====================================
// const App = () => {
//   // default persons data
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   ])
//   // add new person states
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const addPerson = (event) => {
//     event.preventDefault()
//     const isThere = persons.some(person => person.name === newName)
//     if (isThere) {
//       alert(`${newName} is already added to phonebook`)
//       return
//     }
//     const nameObject = { name: newName, number: newNumber }
//     setPersons(persons.concat(nameObject))
//     setNewName('')
//     setNewNumber('')
//   }
//   // filter persons states
//   const [filter, setFilter] = useState('')
//   const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
//   //return jsx
//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <div> 
//         filter shown with <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
//       </div>

//       <h3>add a new</h3>
//       <form onSubmit={addPerson}>
//         <div> 
//           name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
//         </div>
//         <div> 
//           number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
//         </div>
//         <div>
//           <button type="submit"> add </button>
//         </div>
//       </form>

//       <h3>Numbers</h3>
//       <ul>
//         {filteredPersons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
//       </ul>
//     </div>
//   )
// }

// ====================================
// ex 2.10
// ====================================
// const Filter = ({filter, setFilter}) => {
//   return (
//     <div> 
//     filter shown with {' '} 
//     <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
//     </div>
//   )
// }

// const PersonForm = ({newName, setNewName, newNumber, setNewNumber, addPerson}) => {
//   return (
//     <form onSubmit={addPerson}>
//       <div>
//         name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
//       </div>
//       <div>
//         number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
//       </div>
//       <div>
//         <button type="submit"> add </button>
//       </div>
//     </form>
//   )
// }

// const Persons = ({persons}) => {
//   return (
//     <ul>
//       {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
//     </ul>
//   )
// }

// const App = () => {
//   // default persons data
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   ])
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [filter, setFilter] = useState('')

//   // add new person states
//   const addPerson = (event) => {
//     event.preventDefault()
//     const isThere = persons.some(person => person.name === newName)
//     if (isThere) {
//       alert(`${newName} is already added to phonebook`)
//       return
//     }
//     const nameObject = { name: newName, number: newNumber }
//     setPersons(persons.concat(nameObject))
//     setNewName('')
//     setNewNumber('')
//   }

//   // filter persons states
//   const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
//   //return jsx
//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Filter filter={filter} setFilter = {setFilter}/>

//       <h3>add a new</h3>
//       <PersonForm
//         newName={newName}
//         setNewName={setNewName}
//         newNumber={newNumber}
//         setNewNumber={setNewNumber}
//         addPerson={addPerson}
//       />

//       <h3>Numbers</h3>
//       <Persons persons={filteredPersons}/>
//     </div>
//   )
// }

// export default App


// ====================================
// ex 2.11
// ====================================
const Filter = ({filter, setFilter}) => {
  return (
    <div> 
    filter shown with {' '} 
    <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
    </div>
  )
}

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, addPerson}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit"> add </button>
      </div>
    </form>
  )
}

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </ul>
  )
}

const App = () => {
  // default persons data, hard coded
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })

  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // add new person states
  const addPerson = (event) => {
    event.preventDefault()
    const isThere = persons.some(person => person.name === newName)
    if (isThere) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameObject = { name: newName, number: newNumber }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  // filter persons states
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  //return jsx
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter = {setFilter}/>

      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App