const Course = ({course,suma}) => {
  
  return (
     <div>
       <h1>{course.name}</h1>
     
       {course.parts.map(cours=> (
              
           <ul key={cours.id}>{cours.name} {cours.exercises} </ul>
          
            ))}
           <ul>Total of exercises {suma} </ul>
     </div>
  )

};



const App = () => {

  const course = {
  
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
     ],
  };
  
  
       
const suma = course.parts.reduce((s,p) =>
  s + p.exercises,0 )
 /* console.log('what is happening',suma)*/
   
  return (
   
      <Course course={course} suma={suma}  /> 
     
    
   
  );

};
     
export default App