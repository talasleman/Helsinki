import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    const key = 'name'
    const value = newName
    if (persons.some(person => person[key] === value))
    {
      // use alert instead
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')

  }

  //create addFilter + add handleFilterChange
  const addFilter = (event) => {
    event.preventDefault()
    setShowAll(!showAll)

  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()) === true)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(newFilter)
    addFilter(event)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form> 
      <div> filter shown with <input value = {newFilter} onChange = {handleFilterChange}></input>
      </div>
      </form>
      <h2>add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value = {newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{personsToShow.map((person) => <p key = {person.name}>{person.name} {person.number}</p>)}</div>
    </div>
  )
}

export default App