import React, { useState } from 'react'

const Statistics = ({ good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good-bad)/ all;
  const positive = (good*100)/ all;
    return (
      <div>
    
       <h1>Statistics </h1>
       <p>good {good}</p>
       <p>neutral {neutral}</p>
       <p>bad {bad}</p>
       <p> all {all}</p>
       <p>average {average} </p>  
       <p>positive {positive}</p>
      </div>
    )
}

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
    <Statistics  good={good} neutral={neutral} bad={bad} />
  
  </div>
  );
};



export default App;