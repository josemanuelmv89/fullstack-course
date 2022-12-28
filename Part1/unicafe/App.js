import React, { useState } from 'react'

const Statistics = ({allClicks, good, neutral, bad}) => {
  if (allClicks.length === 0) {
    return (

      <div>
      <h1>Statistics </h1>
       <>The Statistics is used by pressing the buttons</> 
      </div>
    )
  }
  const all = good + neutral + bad;
  const average = (good-bad)/ all;
  const positive = (good*100)/ all;
    return (
      <div>
    
       <h1>Statistics </h1>
       <table>
       <StatisticLine text="good"       value={good}/>
       <StatisticLine text="neutral"    value={neutral} />
       <StatisticLine text="bad"        value={bad} />
       <StatisticLine text="all"        value={all} />
       <StatisticLine text="average "   value={average}/> 
       <StatisticLine text="positive "  value={positive} /> 
       </table>
      </div>
    )
};

const StatisticLine = ({text, value}) =>(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>


);
const App = () => {
  // save clicks of each button to its own state
  const [good, setgood] = useState(0)
  const [neutral, setneutral] = useState(0)
  const [bad, setbad] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setgood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setneutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setbad(bad + 1)
  }
  return (
    <div>
    <h1> Give Feedback</h1>
    <button onClick={handleGoodClick}>good</button>
    <button onClick={handleNeutralClick}>neutral</button>
    <button onClick={handleBadClick}>bad</button>
    <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
  
  </div>
  );
};



export default App;