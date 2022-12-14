const Header = (props) => {

  return <h1>{props.course}</h1>;

};

const Part = (props) => {

  return (
     <p>
     {props.name}   {props.exercises} 
    </p>
  );
};
const Content = (props) => {
  console.log(props);
  return (
    <div> 
        <Part name={props.parts[0].name}  exercises={props.parts[0].exercises} />
     
    </div>
  );
};



const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

return (
      <div>
      <Header    course={course.name}/>
      <Content   parts={course.parts}/>
     
      </div>
);
};



export default App;