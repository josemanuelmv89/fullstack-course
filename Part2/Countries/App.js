import React, { useState} from "react";
import axios from "axios";

const Show = ({ varfiltercountries, varfilterweather, infocountry, selectcountry }) => {
  if (varfiltercountries.length > 10) {
    return (
      <div>
        <>'Too many matches, specify another filter'</>
      </div>
    );
  } else if (varfiltercountries.length === 1) {
    return infocountry(varfiltercountries, varfilterweather);
  } else if (varfiltercountries.length > 1 || varfiltercountries.length <= 10) {
    return (
      <div>
        {/* Muestro el arreglo de objetos mayor que 1 o menor/igual que 10*/}{" "}
        {varfiltercountries.map((coun) => {
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
  const [weather, setweather] = useState([]);
/*Obtencion de datos del servidor falsos y almacenamiento de datos en variables de useState*/
  const getApisData = () => {

    let url1 = "https://studies.cs.helsinki.fi/restcountries/api/all";
    let url2 = "http://localhost:3004/weather";
    let endpoins = [url1, url2];
    console.log("endpoins", endpoins);

    Promise.all(endpoins.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: countries }, { data: weather }]) => {
        console.log("two promise fulfilled");
        setcountries(countries);
        setweather(weather);
      }
    );
  };

  const handleFilterChange = (event) => {
    getApisData();
    const serch = event.target.value;
    console.log("newSearch", newSearch);
    setSearch(serch);
  };
  /*Filtro los paises y obtengo un arreglo de objetos*/
  const varfiltercountries = countries.filter((f) =>
    f.name.common.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
  );
  const varfilterweather = weather.filter((g) =>
    g.location.country.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
  );
  /*Esta funcion muestra informacion de un pais en particular*/
  const infocountry = (varfiltercountries, varfilterweather) => {
    console.log("varfiltercountries", varfiltercountries);
    console.log("varfilterweather", varfilterweather);
    return (
      <div>
        {/* Muestro el arreglo de objetos de tamaño 1*/}{" "}
        {varfiltercountries.map((coun) => {
          return (
            <div key={coun.capital}>
              <h1>{coun.name.common}</h1>
              <div>{`Capital: ${coun.capital}`}</div>
              <h2>Spoken languages</h2>
              <div>
                {Object.values(coun.languages).map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </div>{" "}
              <div>{`flag: ${coun.flags.svg}`}</div>
            </div>
          );
        })}{" "}
        <div>
          <h2>Weather</h2>
          <div>
            {varfilterweather.map((wea) => {
              return (
                <div key={wea.location.name}>
                  <div>{`region: ${wea.location.region}`}</div>
                  <div>{`temperature: ${wea.current.temperature}`}</div>
                  <div>{`humidity: ${wea.current.humidity}`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
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
        varfiltercountries={varfiltercountries}
        varfilterweather={varfilterweather}
        infocountry={infocountry}
        selectcountry={selectcountry}
      />
    </div>
  );
};

export default App;



