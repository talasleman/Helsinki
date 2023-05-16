import { useState } from 'react'

const Popular = (props) => {
  const votes = props.votes
  const max = Math.max(...votes)
  const index = votes.indexOf(max)
    return (
      <div>
        {props.values[index]}
      </div>
    )
}
const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleNext = () => {
    const randomVal = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomVal)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
   
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <button onClick={handleVote}>vote</button>
      <button onClick = {handleNext}>next anecdote</button>
      
      <h1>Anecdote with most votes</h1>
<Popular values = {anecdotes} votes = {votes}></Popular>
    </div>
  )
}

export default App