import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'

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
//   // default persons data, hard coded
//   // const [persons, setPersons] = useState([
//   //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
//   //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//   //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//   //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   // ])
//   const [persons, setPersons] = useState([])
//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/persons')
//       .then(response => {
//         setPersons(response.data)
//       })

//   }, [])

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

// ====================================
// ex 2.12
// Currently, 
// the numbers that are added to the phonebook are not saved to a backend server. 
// Fix this situation.
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

// // show all the data in the infor
// const Persons = ({persons}) => {
//   return (
//     <ul>
//       {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
//     </ul>
//   )
// }

// const App = () => {
//   // getting the backend js data
//   const [persons, setPersons] = useState([])
//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/persons')
//       .then(response => {
//         setPersons(response.data)
//       })
//   }, [])

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
//     const nameObject = {
//       name: newName, 
//       number: newNumber 
//     }
//     // setPersons(persons.concat(nameObject)) // added to only local, but not updated to the backend                                                                 
//     // setNewName('')
//     // setNewNumber('')
//     axios
//       .post('http://localhost:3001/persons', nameObject)
//       .then(response => {
//         setPersons(persons.concat(response.data)) 
//         //could concat nameObject as well, but concat response.data is better                                                             
//         setNewName('')
//         setNewNumber('')
//       })
//   }

//   // filter persons states: only show the name
//     const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
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

// ====================================
// ex 2.13
// Extract the code that handles the communication with the backend into its own module
// by following the example shown earlier in this part of the course material.
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

// // show all the data in the infor
// const Persons = ({persons}) => {
//   return (
//     <ul>
//       {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
//     </ul>
//   )
// }

// const App = () => {
//   // getting the backend js data
//   const [persons, setPersons] = useState([])
//   useEffect(() => {
//     phonebookService.getAll()
//     .then(response => {setPersons(response.data)})
//   }, [])

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
//     const nameObject = {
//       name: newName, 
//       number: newNumber 
//     }
//     phonebookService.create(nameObject) 
//       .then(response => {
//         setPersons(persons.concat(response.data))
//         //could concat nameObject as well, but concat response.data is better                                                             
//         setNewName('')
//         setNewNumber('')
//       })
//   }

//   // filter persons states: only show the name
//     const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
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


// ====================================
// ex 2.13
// Extract the code that handles the communication with the backend into its own module
// by following the example shown earlier in this part of the course material.
// -- ex 2.15
// ex 2.16: Phonebook step 11
// Use the improved error message example from part 2 as a guide 
// to show a notification that lasts for a few seconds 
// after a successful operation is executed 
// (a person is added or a number is changed):
// ====================================

const Notification = ({ message }) => {
  if (message === null) 
    return null 

  const style = {
    color: 'green',   
    background: 'lightgrey',
    fontSize: 20,
    border: 'solid 1px',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

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

// show all the data in the infor
const Persons = ({persons, handleDelete}) => {
  return (
    <ul>
      {persons.map(person => 
        <li key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}> delete </button>
        </li>
      )}
    </ul>
  )
}

const App = () => {
  // getting the backend js data
  const [persons, setPersons] = useState([])
  useEffect(() => {
    phonebookService.getAll()
    .then(response => {setPersons(response.data)})
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // add new person states
  const addPerson = (event) => {
    event.preventDefault()

    const existsPerson = persons.find(person => person.name === newName)
    if (existsPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
      if (confirmUpdate) {
        const updatedPerson = { 
          ...existsPerson, 
          number: newNumber 
        }
        phonebookService.update(updatedPerson)
          .then(response => {
            setPersons(persons.map(person => 
              person.id !== updatedPerson.id ? person : response.data
            ))
            setNewName('')
            setNewNumber('')
          })
        }
        return
    }
    
    const nameObject = {
      name: newName, 
      number: newNumber 
    }
    phonebookService.create(nameObject) 
      .then(response => {
        setPersons(persons.concat(response.data))
        //could concat nameObject as well, but concat response.data is better                                                             
        setNewName('')
        setNewNumber('')
        setSuccessMessage(`Added ${response.data.name}`)
        setTimeout(() => setSuccessMessage(null), 4000)
      })
  }

  //delete a person
  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    const confirmDelete = window.confirm(`Delete ${person.name} ?`)
    if (confirmDelete) {
      phonebookService.remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
    }
  }

  // filter persons states: only show the name
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  //return jsx
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter = {setFilter}/>
      <Notification message={successMessage} />

      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App