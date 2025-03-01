const Persons = ({ persons, newSearch }) => {
  return (
    <ul>
      {persons
        .filter((f) =>
          f.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
        )
        .map((individuo) => {
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

export default Persons;

