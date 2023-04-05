const Course = ({course}) => {
  console.log(course)
  return (
    <div>
       {course.parts.map(cours=> (
              
           <li key={cours.id}>{cours.name}</li>
           
            ))}
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
  
  
  return (
    
      
      <Course course={course}> </Course>
     
  );

};
     
export default App