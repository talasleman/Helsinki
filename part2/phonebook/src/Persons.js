import personService from "./services/person"

const Persons = ({onDelete, persons}) => {

    const handleDelete = (id) => { 
        const idToDelete = id
        onDelete(idToDelete)
    }

    return (
      <div>
        {persons.map((person) => {return <p key = {person.name}>{person.name} {person.number}<button onClick = {() => handleDelete(person.id)}>delete</button></p>})}
      </div>
    )
  }

export default Persons