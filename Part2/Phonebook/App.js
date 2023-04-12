import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas"}]);
  const [newName, setNewName] = useState("Jose Manuel");

  const addName = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const persObject = { name: newName };

    setPersons(persons.concat(persObject));
    console.log('what is persObject',persObject)
    setNewName("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

 const PersonsComp = ({ individuo }) => {
  console.log('what is individuo.name',individuo.name)
    return <h4>{individuo.name} </h4>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(individuo => 
          <PersonsComp key={individuo.name} individuo={individuo} />
        )}
      </ul>
    </div>
  );
};

export default App;
