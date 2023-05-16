import { useState } from 'react'

const Total = (props) => {
    const total = props.values[0].good + props.values[1].neutral + props.values[2].bad
    return (
      <tr>
        <td>all</td>
        <td>{total}</td>
      </tr>
        
      
    )
}

const Average = (props) => {
  const avg = (props.values[0].good - props.values[2].bad)/(props.values[0].good + props.values[1].neutral + props.values[2].bad)
  return (
    <tr>
      <td>average</td>
      <td>{avg}</td>
    </tr>
  )
}

const Positive = (props) => {
    const pos = props.values[0].good/(props.values[0].good + props.values[1].neutral + props.values[2].bad)
    return (
      <tr>
        <td>postive </td>
        <td>{pos} %</td>
        
      </tr>
    )
}

const StatisticLine = (props) => {

  return (
    <tr>
      <td>
        {props.text} 
      </td>
      <td>
        {props.value}
      </td>
      
    </tr>
  )
}

const Statistics = (props) => {
  
  const good = props.values[0].good
  const neutral = props.values[1].neutral
  const bad = props.values[2].bad

  if (good === 0 && neutral === 0 && bad === 0)
  {
    return (<div>No feedback given</div>)
  }
  return (
    <table>
      <tbody>
      <StatisticLine text = "good" value = {good}></StatisticLine>
      <StatisticLine text = "neutral" value = {neutral}></StatisticLine>
      <StatisticLine text = "bad" value = {bad}></StatisticLine>
      <Total values = {[{good}, {neutral}, {bad}]}></Total>
      <Average values = {[{good}, {neutral}, {bad}]}></Average>
      <Positive values = {[{good}, {neutral}, {bad}]}></Positive>
      </tbody>
    </table>
    
  )
}

const Button = (props) => {
  
  return (
    <button onClick={props.eventHandler}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button text = "good" eventHandler ={handleClickGood}></Button>
      <Button text = "neutral" eventHandler ={handleClickNeutral}></Button>
      <Button text = "bad" eventHandler ={handleClickBad}></Button>
      <h1>statistics</h1>
      <Statistics values = {[{good}, {neutral}, {bad}]} ></Statistics>
    </div>
  )
}

export default App