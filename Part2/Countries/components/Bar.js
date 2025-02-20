import React from "react";
const Bar = ({ newSearch, handleFilterChange }) => {/*Creacion del componente barra de entrada de nombres de paises*/
  return (
    <div>
      Find countries: <input value={newSearch} onChange={handleFilterChange} />
    </div>
  );
};
export default Bar;