import SearchIcon from "../../assets/search.svg";
import "./index.css";

const Search = () => {
  return (
    <div className="search">
      <section className="search-bar inline-flex justify-between items-center">
        <input
          className="w-full"
          type="text"
          placeholder="Search for any recipe"
        />
        <img src={SearchIcon} alt="Search" />
      </section>
    </div>
  );
};
export default Search;
