import React, { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newClicks = {
     good: clicks.good + 1,
     neutral: clicks.neutral,
     bad: clicks.bad
 
    }
    setClicks(newClicks)
  }
  const handleNeutralClick = () => {
    const newClicks = {
     good: clicks.good,
     neutral: clicks.neutral+ 1,
     bad: clicks.bad
 
    }
    setClicks(newClicks)
  }

  const handleBadClick = () => {
    const newClicks = {
     good: clicks.good,
     neutral: clicks.neutral,
     bad: clicks.bad + 1
 
    }
    setClicks(newClicks)
  }
  return (
    <div>
   {clicks.good}
    <button onClick={handleGoodClick}>good</button>

    {clicks.neutral}
    <button onClick={handleNeutralClick}>neutral</button>
    
    {clicks.bad}
    <button onClick={handleBadClick}>bad</button>
  
  </div>
  );
};



export default App;