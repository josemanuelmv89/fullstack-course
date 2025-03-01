import React from "react";

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
  export default Course