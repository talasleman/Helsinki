import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'
import personService from './services/person'
import Notification from './Notification'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [confirmationMessage, setConfirmationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
    .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const key = 'name'
    const value = newName
    
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    let personToUpdate = persons.find(person => person[key] === value)
    
    if (personToUpdate)
        {
          const confirmUpdate = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)
          if (confirmUpdate)
          {
            personService.update(personToUpdate.id, nameObject).then(response => {
            setPersons(persons.map(person => {
              if (person.id === personToUpdate.id)
              {
                return response.data
              }
              else
              {
                return person
              }
            }))
            setConfirmationMessage(`Change the phone number for ${newName}`)
            setTimeout(() => {
              setConfirmationMessage(null)
            }, 5000)
            setNewName('')
            setNewNumber('')
          }).catch(error => {
            setErrorMessage(`Information of ${newName} has already been removed from the server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          }
          
          return
    }
    

    personService.create(nameObject).then(response => {
      setPersons(persons.concat(response.data))
      setConfirmationMessage(`Added ${newName}`)
            setTimeout(() => {
              setConfirmationMessage(null)
            }, 5000)
      setNewName('')
      setNewNumber('')
    })
  }

  

  //create addFilter + add handleFilterChange
  const addFilter = (event) => {
    event.preventDefault()
    if (newFilter.trim() !== "") {
      setShowAll(false)
    }
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

  const handleDelete = async (idToDelete) => {
    personService.deleteObject(idToDelete).then(response => {
      console.log('person deleted')
      setPersons(persons => persons.filter(person => person.id !== idToDelete))})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification.ConfirmationNotification message = {confirmationMessage}></Notification.ConfirmationNotification>
      <Notification.ErrorNotification message = {errorMessage}></Notification.ErrorNotification>
      <Filter filter = {newFilter} handleFilterChange = {handleFilterChange}></Filter>
      <h2>add new</h2>
      <PersonForm name = {newName} submit = {addPerson} handleNameChange ={handleNameChange}
      number = {newNumber} handleNumberChange = {handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      <Persons onDelete={handleDelete} persons = {personsToShow}></Persons>
     </div>
  )
}

export default App