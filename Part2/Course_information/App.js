const Course = ({ cours }) => {
  return (
    <div>
      <Header header={cours} />
      <Content content={cours} />
      <Suma suma={cours} />
    </div>
  );
};

const Header = ({ header }) => {
  /*console.log('what is happening',header.id,header.name)*/
  return <h2 key={header.id}>{header.name} </h2>;
};
const Content = ({ content }) => {
  const varcontent = content.parts.map((c) => {
    /*console.log('what is happening',c.id,c.name,c.exercises)*/
    return (
      <p key={c.id}>
        {" "}
        {c.name} {c.exercises}
      </p>
    );
  });
  return <div>{varcontent}</div>;
};
const Suma = ({ suma }) => {
  const varsuma = suma.parts.reduce((s, p) => {
    /*console.log('what is happening',s + p.exercises,s,p.exercises)*/
    return s + p.exercises;
  }, 0);
  return (
    <div>
      <h4>total of {varsuma} exercises</h4>
    </div>
  );
};

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },

        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      id: 2,
      name: "node.js",
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },

        {
          name: "Middleware",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      {course.map((cours) => {
        return <Course key={cours.id} cours={cours} />;
      })}
    </div>
  );
};

export default App;
