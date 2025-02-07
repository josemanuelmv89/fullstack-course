import React, { useEffect, useState } from "react";
import axios from "axios";


const Bar = ({ newSearch, handleFilterChange }) => {/*Creacion del componente barra de entrada de nombres de paises*/
  return (
    <div>
      Find countries: <input value={newSearch} onChange={handleFilterChange} />
    </div>
  );
};

const Show = ({
  varfiltercountries,
  infocountry,
  selectcountry,
  infoweather,
  getDataWeather,
  weather,
}) => {
  if (varfiltercountries.length > 10) {
    return (
      <div>
        <>'Too many matches, specify another filter'</>
      </div>
    );
  } else if (varfiltercountries.length === 1) {
    return (
      <div>
        <div>{infocountry(varfiltercountries)}</div>
        <div>{infoweather(weather)}</div>
      </div>
    );
  } else if (varfiltercountries.length > 1 || varfiltercountries.length <= 10) {
    return (
      <div>
        {/* Muestro el arreglo de objetos mayor que 1 o menor/igual que 10*/}{" "}
        {varfiltercountries.map((coun) => {
          return (
            <ul key={coun.name.common}>
              {" "}
              {coun.name.common}{" "}
              <button
                onClick={() => {
                  selectcountry(coun.name.common);
                  getDataWeather(coun.capital);
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

const App = () => {
  const [newSearch, setSearch] = useState("");
  const [countries, setcountries] = useState([]);
  const [weather, setweather] = useState();

  

  const getDataCountries = () => {/*Obtencion de datos del servidor y almacenamiento de datos en variables de useState*/
    let url = "https://studies.cs.helsinki.fi/restcountries/api/all";
    axios.get(url).then((response) => {/*console.log("Get api url", url); Ver el llamado a la url */
      setcountries(response.data);/*console.log("response.data", response.data); Ver los datos */
    });
  };

  const handleFilterChange = (event) => {
    getDataCountries();
    const serch = event.target.value;
    setSearch(serch);
  };
  console.log("newSearch", newSearch);
  /*Filtro los paises y obtengo un arreglo de objetos*/
  const varfiltercountries = countries.filter((f) =>
    f.name.common.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
  );

  
 
  const infocountry = (varfiltercountries) => { /*Esta funcion muestra informacion de un pais en particular*/
    return (
      <div>
        {/* Muestro el arreglo de objetos de tamaño 1*/}{" "}
        {varfiltercountries
          ? varfiltercountries.map((coun) => {
              return (
                <div key={coun.capital}>
                  <h1>{coun.name.common}</h1>
                  <div>{`Capital: ${coun.capital}`}</div>
                  <h2>Spoken languages</h2>
                  <div>
                    {Object.values(coun.languages).map((p) => (
                      <div key={p}>{p}</div>
                    ))}
                  </div>
                    <img width={100} src={coun.flags.svg} alt={coun.flags.alt} />
                </div>
              );
            })
          : null}
      </div>
    );
  };
  
  const selectcountry = (newValuecountry) => {/*Si el usuario preciona en un pais, se actualiza el estado de la variable newsearch*/
    setSearch(newValuecountry);
  };

  const getDataWeather = (newValuecity) => {/*Obtencion de datos del servidor y almacenamiento de datos en variables de useState*/
    let serchcity = newValuecity;
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=`;
    let appid = `&appid=`;
    let apikey = `beba7cdbce8071870832d7c3291f189a`;
    urlWeather = urlWeather + serchcity + appid + apikey;
    console.log("urlWeather", urlWeather);
    axios
      .get(urlWeather)
      .then((response) => {
        setweather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect( getDataWeather,[])
  

  const infoweather = (weather) => {/*Esta funcion muestra informacion del clima de la capital*/
   const iconName = weather ? weather.weather[0].icon : null;
    return (
      <div>
        <div>Name: {weather ? weather.name : null}</div>
        <div>Pressure: {weather ? weather.main.pressure : null}</div>
        <div>Humidity: {weather ? weather.main.humidity : null}</div>
        <div>Sea level: {weather ? weather.main.sea_level : null}</div>        
        <div>Weather: {weather ? weather.weather[0].description : null}</div>
        <img width={75} src={ 'https://openweathermap.org/img/wn/' + iconName + '.png' } alt={"Weather"} />        
      </div>
    );
  };
  return (
    <div>
      <Bar newSearch={newSearch} handleFilterChange={handleFilterChange} />
      <Show
        infocountry={infocountry}
        varfiltercountries={varfiltercountries}
        selectcountry={selectcountry}
        infoweather={infoweather}
        weather={weather}
        getDataWeather={getDataWeather}
      />
    </div>
  );
};

export default App;
