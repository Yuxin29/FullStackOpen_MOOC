import { useState } from 'react'

// ====================================
// ex 2.6-2.8
// ====================================
const App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])

  const [newName, setNewName] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const isThere = persons.some(person => person.name === newName)
    if (isThere) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameObject = { name: newName }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div> 
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit"> add </button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App