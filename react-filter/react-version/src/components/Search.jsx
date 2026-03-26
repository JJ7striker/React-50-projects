const Search = ({ name, setName }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
