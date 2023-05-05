import React, { useState } from "react";

const App = () => {
  const [newSearch, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([
    { id: 0, number: "040-143456", name: "Mauricio Hellas" },
    { id: 1, number: "020-123456", name: "Adonay Hellas" },
    { id: 2, number: "030-223456", name: "Maria Berta" },
    { id: 3, number: "070-133456", name: "Elena Cruz" },
    { id: 4, number: "090-153456", name: "Milano Jose" },
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

  const handleFilterChange = (event) => {
    const serch = event.target.value;
    console.log("what is value seach", serch);
    setSearch(serch);

    setPersons(
      persons.filter((f) =>
        f.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
      )
    );
    console.log("what is value persons", persons);
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
      <div>
        Filter for name:{" "}
        <input value={newSearch} onChange={handleFilterChange} />
      </div>
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
