const Persons = ({ persons }) => {
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

export default Persons;
