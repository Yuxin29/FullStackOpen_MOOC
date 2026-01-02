import { useState } from 'react'

// ====================================
// ex 1.6
// ====================================
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h2>give feelback</h2>

//       <button onClick={() => setGood(good + 1)}>
//         good
//       </button>
//       <button onClick={() => setNeutral(neutral + 1)}>
//         neutral
//       </button>
//       <button onClick={() => setBad(bad + 1)}>
//         bad
//       </button>

//       <h2>statistics</h2>
//       <p> good {good} </p>
//       <p> neutral {neutral} </p>
//       <p> bad {bad} </p>

//     </div>
//   )
// }

// ====================================
// ex 1.7
// ====================================
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h2>give feelback</h2>

//       <button onClick={() => setGood(good + 1)}>
//         good
//       </button>
//       <button onClick={() => setNeutral(neutral + 1)}>
//         neutral
//       </button>
//       <button onClick={() => setBad(bad + 1)}>
//         bad
//       </button>

//       <h2>statistics</h2>
//       <p> good {good} </p>
//       <p> neutral {neutral} </p>
//       <p> bad {bad} </p>
//       <p> all {good + neutral + bad} </p>
//       <p> average {(good - bad) / (good + neutral + bad)} </p>
//       <p> positive {(good / (good + neutral + bad)) * 100} % </p>

//     </div>
//   )
// }

// ====================================
// ex 1.8
// ====================================
// const Statistics = ({good, neutral, bad}) => {
//   return (
//     <div>
//       <h2>statistics</h2>
//       <p> good {good} </p>
//       <p> neutral {neutral} </p>
//       <p> bad {bad} </p>
//       <p> all {good + neutral + bad} </p>
//       <p> average {(good - bad) / (good + neutral + bad)} </p>
//       <p> positive {(good / (good + neutral + bad)) * 100} % </p>  
//     </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h2>give feelback</h2>

//       <button onClick={() => setGood(good + 1)}>
//         good
//       </button>
//       <button onClick={() => setNeutral(neutral + 1)}>
//         neutral
//       </button>
//       <button onClick={() => setBad(bad + 1)}>
//         bad
//       </button>

//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }

// ====================================
// ex 1.9
// ====================================
// const Statistics = ({good, neutral, bad}) => {
//   if (good === 0 && neutral === 0 && bad === 0)
//     return (
//       <div>
//         <h2>No feedback given</h2>
//       </div>
//     )
//   return (
//     <div>
//       <h2>statistics</h2>
//       <p> good {good} </p>
//       <p> neutral {neutral} </p>
//       <p> bad {bad} </p>
//       <p> all {good + neutral + bad} </p>
//       <p> average {(good - bad) / (good + neutral + bad)} </p>
//       <p> positive {(good / (good + neutral + bad)) * 100} % </p>  
//     </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h2>give feelback</h2>

//       <button onClick={() => setGood(good + 1)}>
//         good
//       </button>
//       <button onClick={() => setNeutral(neutral + 1)}>
//         neutral
//       </button>
//       <button onClick={() => setBad(bad + 1)}>
//         bad
//       </button>

//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }

// ====================================
// ex 1.10
// ====================================
// const StatisticLine = ({text, value}) => {
//   return(
//     <div>
//       {text} {value}
//     </div>
//   )
// }

// const Statistics = ({ good, neutral, bad }) => {
//   const all = good + neutral + bad

//   if (all === 0)
//     return (
//       <div> <h2>No feedback given</h2> </div>
//     )

//   return (
//     <div>
//       <h2>statistics</h2>
//       <StatisticLine text = "good" value={good}/>
//       <StatisticLine text = "neutral" value={neutral}/>
//       <StatisticLine text = "bad" value={bad}/>
//       <StatisticLine text = "all" value={all}/>
//       <StatisticLine text = "average" value={(good - bad) / all}/>
//       <StatisticLine text = "positive" value={(good / all * 100).toFixed(1) + ' %'} />
//     </div>
//   )
// }

// const Button = ({text, onClick}) => {
//   return(
//     <div>
//       <button onClick={onClick}>
//         {text}
//       </button>
//     </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h2>give feelback</h2>

//       <Button text = "good" onClick={() => setGood(good + 1)}/>
//       <Button text = "neutral" onClick={() => setNeutral(neutral + 1)}/>
//       <Button text = "bad" onClick={() => setBad(bad + 1)}/>

//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }
// ====================================
// ex 1.11
// ====================================
const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>  {text}  </td>
      <td>  {value}  </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0)
    return (
      <div> <h2>No feedback given</h2> </div>
    )

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text = "good" value={good}/>
          <StatisticLine text = "neutral" value={neutral}/>
          <StatisticLine text = "bad" value={bad}/>
          <StatisticLine text = "all" value={all}/>
          <StatisticLine text = "average" value={(good - bad) / all}/>
          <StatisticLine text = "positive" value={(good / all * 100).toFixed(1) + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({text, onClick}) => {
  return(
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feelback</h2>

      <Button text = "good" onClick={() => setGood(good + 1)}/>
      <Button text = "neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text = "bad" onClick={() => setBad(bad + 1)}/>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

//table   The container for your table.
//tbody   Groups all the data rows of the table
//tr      table raw
//td      table data cell

export default App