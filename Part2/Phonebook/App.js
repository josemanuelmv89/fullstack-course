import React, { useState } from "react";

const App = () => {
  const [newName, setNewName] = useState("");
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas" },
  ]);

  const addName = (event) => {
    event.preventDefault();
    
    const persObject = { id:persons.length + 1 , name: newName };
    console.log("what is persObject", persObject);
    console.log("what is newName", newName);

    const personsfilter = persons.filter((f) => f.name === newName);
    console.log("what is personsfilter", personsfilter);
    console.log("what is persons", persons);
    console.log("what is persObject.name", persObject.name);

    if (personsfilter.length === 1) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(persObject));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    const datainput = event.target.value;
    /*console.log("what is datainput", datainput);*/
    setNewName(datainput);
  };

  const PersonsComp = ({ persons }) => {
 
    return (
      <ul>
        {persons.map((individuo) => {
          return <div key={individuo.id}> {individuo.name}</div>;
        })}
      </ul>
    );
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
      <PersonsComp persons={persons} />
    </div>
  );
};

export default App;
