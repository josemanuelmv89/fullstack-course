const Filter = ({newSearch,handleFilterChange}) => {
  return (
    <div>
      Filter for name: <input value={newSearch} onChange={handleFilterChange} />
    </div>
  );
};
export default Filter;