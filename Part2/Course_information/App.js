const Course = ({cours}) => {

  return (
     <div>
         <Header  header={cours}/> 
         <Content content={cours}/>
           
           {/*<ul>Total of exercises {suma} </ul>*/}
     </div>
  )
};

const Header = ({header}) => {
/*console.log('what is happening',cours.id,cours.name)*/
return(
  <h1 key={header.id} >{header.name} </h1>
 )
};
const Content = ({content}) => {

return(
  <div>
    {content.parts.map((c)=> {
           /* console.log('what is happening',c.id,c.name)*/
              return <p key={c.id}> {c.name}</p>
            })}
      
  </div>

)
};



const App = () => {

  const course = [
  
  {
  
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
  
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
     ],
  },
  {
    id: 2,
    name: 'node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },

      {
        name: 'Middleware',
        exercises: 7,
        id: 2,
      },
  ],
 },
] 
  
       
 /*const suma = course.parts.reduce((s,p) =>
  s + p.exercises,0 )
 console.log('what is happening',suma)*/
   
return (
   <div>
     {course.map((cours)=> {
          
      return <Course key={cours.id} cours={cours}/>
       
      })}

   
   </div>  
  
  );

};
     
export default App