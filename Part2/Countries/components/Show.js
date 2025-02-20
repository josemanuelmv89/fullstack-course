import React from "react";

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

export default Show;