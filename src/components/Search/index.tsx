import React, { useState } from "react";
import SearchIcon from "../../assets/search.svg";
import "./index.css";
import RecipeIcon2 from "../../assets/ts-icons/RecipeIcon2";
import CategoryIcon from "../../assets/ts-icons/CategoryIcon";
import GlobeIcon from "../../assets/ts-icons/GlobeIcon";
import IngredientIcon from "../../assets/ts-icons/IngredientIcon";

const Search = () => {
  const [isFocused, setFocus] = useState(true);
  const [isSelected, setSelected] = useState(0);
  const [searchItems] = useState([
    { id: 1, title: "Recipes", icon: RecipeIcon2 },
    { id: 2, title: "Category", icon: CategoryIcon },
    { id: 3, title: "Area", icon: GlobeIcon },
    { id: 4, title: "Ingredient", icon: IngredientIcon },
  ]);

  return (
    <div className="search">
      {isFocused && <div className="overlay"></div>}
      <section
        className={`search-bar inline-flex justify-between items-center ${
          isFocused ? "focused" : "non-focused"
        }`}
      >
        <input
          className="w-full"
          type="text"
          placeholder="Search for any recipe"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <img src={SearchIcon} alt="Search" />
      </section>

      {isFocused && (
        <section className="search-area">
          <div className="flex w-full items-center flex-wrap search-icon-wrapper">
            {React.Children.toArray(
              searchItems.map((item) => (
                <button
                  className={`btn inline-flex items-center ${
                    item.id !== isSelected && "non-selected"
                  }`}
                  onClick={() => setSelected(item.id)}
                >
                  <item.icon
                    fill={item.id === isSelected ? "#fff" : "#AAB1BB"}
                  />
                  <small
                    className={`${item.id !== isSelected && "non-selected"}`}
                  >
                    {item.title}
                  </small>
                </button>
              ))
            )}
          </div>

          <div className="results-block flex items-center justify-center">
            <small className="results-text">
              Start Searching for your&nbsp;
              <span style={{ textTransform: "lowercase" }}>
                {searchItems?.find((item) => item.id === isSelected)?.title}
              </span>
            </small>
          </div>
        </section>
      )}
    </div>
  );
};
export default Search;
