const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
    )
}

const Content = (props) => {
  return (
    <div>
      <Part name = {props.parts[0].name} exercise = {props.parts[0].exercises}></Part>
      <Part name = {props.parts[1].name} exercise = {props.parts[1].exercises}></Part>
      <Part name = {props.parts[2].name} exercise = {props.parts[2].exercises}></Part>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}></Header>
      <Content parts = {course.parts}></Content>
      <Total parts = {course.parts}></Total>
    </div>
  )
}

export default App