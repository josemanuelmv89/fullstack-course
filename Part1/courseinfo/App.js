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
  
  return (
    <div> 
        <Part name={props.parts[0].name}  exercises={props.parts[0].exercises} />
        <Part name={props.parts[1].name}  exercises={props.parts[1].exercises} />
        <Part name={props.parts[2].name}  exercises={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
const num1 = props.parts[0].exercises;
const num2 = props.parts[1].exercises;
const num3 = props.parts[2].exercises;
const result = num1 + num2 + num3;
console.log(result);
  return (
    <div> 
      
      Number of exercises{" "}   {result} 
     
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
      <Total     parts={course.parts} />
      </div>
);
};



export default App;