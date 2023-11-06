import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
  <div>
    <p>{props.text}</p>
    <p>{props.value}</p>
  </div>
  )
}


const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
	return (
  <div>
    <h1>statistics</h1>
		<p>No feedback given</p>
    </div>
	)
  }

  return (
	<div>
	    <h1>statistics</h1>
      <StatisticsLine text="good" value ={props.good} />
      <StatisticsLine text="neutral" value ={props.neutral} />
      <StatisticsLine text="bad" value ={props.bad} />
      <StatisticsLine text="all" value ={props.good+props.bad+props.neutral} />
      <StatisticsLine text="average" value ={(props.good-props.bad)/(props.good+props.bad+props.neutral)} />
      <StatisticsLine text="positive" value ={props.good/(props.good+props.bad+props.neutral)*100 + "%"} />
	</div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
	{text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Button handleClick={()=>setGood(good+1)} text='good' />
      <Button handleClick={()=>setNeutral(neutral+1)} text='neutral' />
      <Button handleClick={()=>setBad(bad+1)} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App