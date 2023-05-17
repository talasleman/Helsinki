const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)}
      </div>
    )
  }
  
  const Total = (props) => {
    const total = props.parts.reduce((total, current) => total + current.exercises, 0)
    return (
      <div style={{fontWeight: "bold"}}>
        Number of exercises {total}
      </div>
    )
  }
  
  const Course = (props) => {
    return (
      <div>
        <Header course = {props.course.name}></Header>
        <Content parts = {props.course.parts}></Content>
        <Total parts = {props.course.parts}></Total>
      </div>
    )
  }

  export default Course