import React, { useState, useEffect } from "react";
import axios from "axios";

const Show = ({ varfilter, infocountry, selectcountry }) => {
  if (varfilter.length > 10) {
    return (
      <div>
        <>'Too many matches, specify another filter'</>
      </div>
    );
  } else if (varfilter.length === 1) {
    return infocountry(varfilter);
  } else if (varfilter.length > 1 || varfilter.length <= 10) {
    return (
      <div>
        {/* Muestro el arreglo de objetos mayor que 1 o menor/igual que 10*/}{" "}
        {varfilter.map((coun) => {
          return (
            <ul key={coun.capital}>
              {" "}
              {coun.name.common}{" "}
              <button
                onClick={() => {
                  selectcountry(coun.name.common);
                }}
              >
                Show
              </button>
            </ul>
          );
        })}{" "}
      </div>
    );
  }
};

/*Creacion del componente barra de entrada de nombres de paises*/
const Bar = ({ newSearch, handleFilterChange }) => {
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
    axios.get("http://localhost:3003/all").then((response) => {
      console.log("promise fulfilled");
      setcountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    const serch = event.target.value;
    console.log("newSearch", newSearch);
    setSearch(serch);
  };
  /*Filtro los paises y obtengo un arreglo de objetos*/
  const varfilter = countries.filter((f) =>
    f.name.common.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
  );

  /*Esta funcion muestra informacion de un pais en particular*/
  const infocountry = (varfilter) => {
    console.log("varfilter", varfilter);
    return (
      <div>
        {/* Muestro el arreglo de objetos de tamaño 1*/}{" "}
        {varfilter.map((coun) => {
          return (
            <div key={coun.capital}>
              <h1>{coun.name.common}</h1>
              <div>{`Capital: ${coun.capital}`}</div>
              <h2>Spoken languages</h2>
              <div>
                {Object.values(coun.languages).map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </div>
              <div>{`flag: ${coun.flags.svg}`}</div>
            </div>
          );
        })}{" "}
      </div>
    );
  };
  /*Si el usuario preciona selectcountry se actualiza el estado de la variable newsearch*/
  const selectcountry = (who) => {
    const parametercountry = who;
    setSearch(parametercountry);
    console.log("newSearch", newSearch);
  };

  return (
    <div>
      <Bar newSearch={newSearch} handleFilterChange={handleFilterChange} />
      <Show
        varfilter={varfilter}
        infocountry={infocountry}
        selectcountry={selectcountry}
      />
    </div>
  );
};

export default App;
