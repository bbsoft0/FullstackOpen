import { useState } from 'react'

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
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good+props.bad+props.neutral}</p>
      <p>average {(props.good-props.bad)/(props.good+props.bad+props.neutral)}</p>
      <p>positive {props.good/(props.good+props.bad+props.neutral)*100}%</p>
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