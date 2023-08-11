import React, { useState, useEffect } from "react";
import axios from "axios";


/*Creacion del componente filtro*/
const Filter = ({ newSearch, handleFilterChange }) => {
  return (
    <div>
      Find countries: <input value={newSearch} onChange={handleFilterChange} />
    </div>
  );
};

const App = () => {
  const [newSearch, setSearch] = useState("");
  const [countries, setcountries] = useState([]);

/*Data "falsa" de paises para realizar pruebas*/
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3002/countries").then((response) => {
      console.log("promise fulfilled");
      setcountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    const serch = event.target.value;
    console.log("what is value seach", serch);
    setSearch(serch);
  };

  
/*Filtrado de paises por busqueda*/
  const filtercountries = countries.filter((f) =>
    f.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
  );
  console.log("what is filtercountries", filtercountries);
  return (
    <div>
      <Filter newSearch={newSearch} handleFilterChange={handleFilterChange} />
      <ul>
        {filtercountries.map((coun) => {
          return <li key={coun.id}> {coun.name} {coun.number}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;