import React, { useState, useEffect } from "react";
import axios from "axios";

/*Creacion del componente barra de entrada de nombres de paises*/
const Bar = ({ newSearch, handleFilterChange }) => {
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
        <div>{infocountry()}</div>
        <div>{infoweather()}</div>
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
  const [weather, setweather] = useState("");
 
  /*Obtencion de datos del servidor y almacenamiento de datos en variables de useState*/
  const getDataCountries = () => {
    let url = "https://studies.cs.helsinki.fi/restcountries/api/all";
    console.count("getDataCountries");
    axios.get(url).then((response) => {
      /*console.log("Get api url", url); Ver el llamado a la url */
      setcountries(
        response.data
      ); /*console.log("response.data", response.data); Ver los datos */
      //*console.log("response.data", response.data)
    });
  };

  /*funcion auxiliar que llama a obtener todos los datos de paises y actualiza el estado de newSearch*/
  const handleFilterChange = (event) => {
    getDataCountries();
    const serch = event.target.value;
    setSearch(serch);
  };

  /*Filtro los paises y obtengo un arreglo de objetos*/
  const varfiltercountries = countries.filter((f) =>
    f.name.common.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
  );
  /*Obtencion de datos del servidor del clima para una ciudad y actualiza el estado de weather*/
  const getDataWeather = () => {
    console.count("getDataWeather");
    const serchcity = varfiltercountries[0].capital[0];
    console.log("serchcity", serchcity);
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=`;
    let appid = `&appid=`;
    let apikey = `beba7cdbce8071870832d7c3291f189a`;
    urlWeather = urlWeather + serchcity + appid + apikey;

    console.count("getDataWeather");
    axios
      .get(urlWeather)
      .then((response) => {
        setweather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 /*Esta funcion llama a getDtaWeather una sola vez; siempre que el tamaño del arreglo sea igual a 1*/
  useEffect(() => {
    if (varfiltercountries.length === 1) {
      getDataWeather();
    }
  }, [varfiltercountries.length]);

   /*Esta funcion muestra informacion de un pais en particular*/
  const infocountry = () => {
    return (
      <div>
        {/* Muestro el arreglo de objetos de tamaño 1*/}{" "}
        {varfiltercountries
          ? varfiltercountries.map((coun) => {
              return (
                <div key={coun.capital}>
                  <h1>{`Country: ${coun.name.common}`}</h1>
                  <div>{`Capital: ${coun.capital}`}</div>
                  <div>Spoken languages: {Object.values(coun.languages)}</div>
                  <div><img width={100} src={coun.flags.svg} alt={coun.flags.alt} /></div>
                  <div><img width={100} src={coun.coatOfArms.png} alt={"Coat of Arms"}/></div> 
                </div>
              );
            })
          : null}
      </div>
    );
  };

  /*Esta funcion muestra el clima de una ciudad en particular*/
  const infoweather = () => {
    const transf = 273.15;
    const iconName = weather ? weather.weather[0].icon : null;
    return (
      <div>
        <div>Name: {weather ? weather.name : null}</div>
        <div>Temperature: {weather ? (weather.main.temp - transf).toFixed(2): null} °C</div>
        <div>Atmospheric pressure: {weather ? weather.main.pressure : null} hPa</div>
        <div>Humidity: {weather ? weather.main.humidity : null} %</div>
        <div>Weather: {weather ? weather.weather[0].description : null}</div>
        <img
          width={100}
          src={"https://openweathermap.org/img/wn/" + iconName + ".png"}
          alt={"Weather"}
        />
      </div>
    );
  };

  /*Si el usuario preciona en un pais, se actualiza el estado de la variable newsearch*/
  const selectcountry = (newValuecountry) => {
    setSearch(newValuecountry);
  };

  return (
    <div>
      <Bar newSearch={newSearch} handleFilterChange={handleFilterChange} />
      <Show
        infocountry={infocountry}
        varfiltercountries={varfiltercountries}
        selectcountry={selectcountry}
        infoweather={infoweather}
      /> 
    </div>
  );
};

export default App;
