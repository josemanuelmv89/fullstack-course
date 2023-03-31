import { useState } from 'react'


const Anecdotesnext = ({anecdotes, selected, vote}) => {
  if (selected === 0) {
    return (

      <div>
      <>'If it hurts, do it more often.'</>
      </div>
    )
  }
 
    return (
      <div>
         {anecdotes[selected]}
         <></>
         <div>has {vote[selected]} votes</div> 
      </div>
    
    )
};
const Anecdotesvotes = ({anecdotes, indice, maxi}) => {
  if (indice === 0) {
    return (

      <div>
       <>'Do your vote.'</> 
      </div>
    )
  }
 
    return (
      <div>
         {anecdotes[indice]}
         <></>
         <div>has {maxi} votes</div> 
      </div>
    
    )
};



const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const anecdotesClick = () => {
    let num_ramd = Math.floor(Math.random() * (6));
    setSelected( num_ramd);
   /* console.log(num_ramd);*/
  };
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  const voteClick = () => {
    let copy = [...vote];
    copy[selected] += 1;
    setVote(copy );
   /* console.log(copy[selected]);
    console.log(copy); */
    mayornumber(copy);
    
  };
  const [maxi, setmaxi] = useState(0)
  const mayornumber = (copy) => {
    const counMximo = [...copy] ;
    setmaxi(Math.max(...counMximo));
   /* console.log(maxi);*/
    mayorindice(copy);
   
  };

  const [indice, setindice] = useState(0)
  const mayorindice = (copy) => {
    const counMximo = [...copy] ;
    const a = Math.max(...counMximo);
    setindice(counMximo.indexOf(a));
    /* console.log(indice);*/
   
  };


  return (
    <div>
      <h1>Anecdote of the day </h1>
      <Anecdotesnext  anecdotes={anecdotes}  selected={selected} vote={vote}/>
      <button onClick={voteClick}>Vote </button>
      <button onClick={anecdotesClick}>Next anecdote </button>
      <h1>Anecdote with most vote </h1>
      <Anecdotesvotes  anecdotes={anecdotes}  indice={indice} maxi={maxi}/>
    </div>
  )
}

export default App;
