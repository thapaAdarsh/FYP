
const Searchbar = ({ setSearchQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call setSearchQuery with the input value
    setSearchQuery(e.target.elements.searchInput.value);
  };

  return (
    <div className="search-bar flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex items-center justify-center w-full">
        <input
          type="text"
          name="searchInput"
          placeholder="Search your food items here..."
          className="p-4 rounded-l-md drop-shadow-lg outline-none w-full sm:w-auto md:w-64 lg:w-96 focus:ring-inset focus:ring-orange-400 focus:ring-1"
        />
        <button
          type="submit"
          className="text-gray-400 bg-orange-400 rounded-r-md p-4 drop-shadow-xl"
        >
          <img src="/img/search.png" alt="" className="h-6 w-6 text-white" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
