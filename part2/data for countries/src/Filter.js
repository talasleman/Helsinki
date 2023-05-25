const Filter = (props) => {
    return (
      <form> 
        <div> find countries <input value = {props.filter} onChange = {props.handleFilterChange}></input>
        </div>
    </form>
    )
    
  }

export default Filter