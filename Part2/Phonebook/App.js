import React, { useState } from "react";

const App = () => {
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [persons, setPersons] = useState([
    { id: 1, number: "040-123456", name: "Arto Hellas" },
  ]);

  const addName = (event) => {
    event.preventDefault();

    const persObject = {
      id: persons.length + 1,
      number: newNumber,
      name: newName,
    };
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
      console.log("what is setPersons", persons);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    console.log("what is value-1", value);
    setNewName(value);
  };

  const handleNumberChange = (event) => {
    const { value } = event.target;
    console.log("what is value-2", value);
    setNewNumber(value);
  };
 

  const PersonsComp = ({ persons }) => {
    return (
      <ul>
        {persons.map((individuo) => {
          return (
            <div key={individuo.id}>
              {" "}
              {individuo.name} {individuo.number}
            </div>
          );
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
          numero: <input value={newNumber} onChange={handleNumberChange} />
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
