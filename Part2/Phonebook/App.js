import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [newSearch, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3002/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);


  const addName = (event) => {
    event.preventDefault();

    const addperson = {
      id: persons.length + 1,
      number: newNumber,
      name: newName,
    };

    console.log("what is addperson", addperson);
    console.log("what is newName", newName);

    const addfilter = persons.filter((f) => f.name === newName);
    console.log("what is addfilter", addfilter);
    console.log("what is persons", persons);
    console.log("what is addperson.name", addperson.name);

    if (addfilter.length === 1) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(addperson));
      console.log("what is setPersons", persons);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleFilterChange = (event) => {
    const varserch = event.target.value;
    console.log("what is value seach", varserch);
    setSearch(varserch);
  };

  const handleNameChange = (event) => {
    const varname = event.target.value;
    console.log("what is varnumber", varname);
    setNewName(varname);
  };

  const handleNumberChange = (event) => {
    const varnumber = event.target.value;
    console.log("what is varnumber", varnumber);
    setNewNumber(varnumber);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  );
};

export default App;
