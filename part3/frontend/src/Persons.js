

const Persons = ({onDelete, persons}) => {

    const handleDelete = (id,name) => { 

        const idToDelete = id
        const confirmDelete = window.confirm(`Delete ${name} ?`)
        if (confirmDelete)
        {
            onDelete(idToDelete)
        }
        
    }

    return (
      <div>
        {persons.map((person) => {return <p key = {person.name}>{person.name} {person.number}<button onClick = {() => handleDelete(person.id, person.name)}>delete</button></p>})}
      </div>
    )
  }

export default Persons