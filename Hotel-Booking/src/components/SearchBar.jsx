function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Destination"
      />

      <input type="date" />

      <input type="date" />

      <input
        type="number"
        placeholder="Guests"
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;
