import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.elements.search.value;
    form.reset();
    if (search.trim() === "") {
      toast.error("Enter text to search for images.");
    }
    onSubmit(search);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          name="search"
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
