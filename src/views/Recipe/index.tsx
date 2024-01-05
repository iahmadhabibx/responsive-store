import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";
import Logo from "../../assets/logo.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import "./index.css";
import RecipeCard from "../../components/RecipeCard";
import Tandoori from "../../assets/tandoori_chicken.png";

const ITEM = {
  title: "Tandoori Chicken",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque tellus. Curabitur vehicula ullamcorper ultrices.",
  image: Tandoori,
  tags: ["Chicken", "Indian"],
  level: "Intermediate",
  time: "2h 30m",
};
const Recipe = () => {
  return (
    <main className="h-full w-full recipe">
      <header className="flex items-center justify-between w-full">
        <section className="bars top-bar flex items-center justify-center">
          <img src={Logo} alt="Meal Deal" />
          <div className="top-content flex flex-col">
            <h2>Meal Deal</h2>
            <small>Recipes for healthy life</small>
          </div>
        </section>
        <section className="discovery inline-flex items-center justify-between w-full">
          <h1>Discover Recipes</h1>
          <Search />
        </section>
      </header>
      <Sidebar />

      <aside className="home">
        <section className="breadcrumbs inline-flex w-full">
          <div>Recipes</div>
          <div>{">"}</div>
          <div>Categories</div>
          <div>{">"}</div>
          <div>Chicken</div>
        </section>
        <hr className="hr" />
        <section className="go-back inline-flex items-center w-full">
          <img
            src={ArrowRight}
            alt="Arrow"
            style={{
              transform: "rotate(180deg)",
              paddingBottom: ".15rem",
              marginRight: ".25rem",
            }}
          />
          <p>Go back</p>
        </section>

        <section className="inline-flex items-center w-full">
          <RecipeCard {...ITEM} size="lg" />
        </section>

        <section className="lst inline-flex items-start w-full">
          <aside className="ing">
            <h3>Ingredients</h3>
            <ul>
              <li>
                <strong>2 Juice</strong> lemons
              </li>
              <li>
                <strong>4 tsp</strong> paprika
              </li>
              <li>
                <strong>2 finely chopped</strong> red onions
              </li>
              <li>
                <strong>16 skinnless</strong> chicken thighs
              </li>
              <li>
                <strong>For brushing</strong> vegetable oil
              </li>
              <li>
                <strong>300ml</strong> Greek yogurt
              </li>
              <li>
                <strong>large piece</strong> ginger
              </li>
              <li>
                <strong>4</strong> garlic clove
              </li>
            </ul>
          </aside>
          <aside className="inst">
            <h3>Instructions</h3>

            <ul>
              <li>
                Mix the lemon juice with the paprika and red onions in a large
                shallow dish. Slash each chicken thigh three times, then turn
                them in the juice and set aside for 10 mins.
              </li>
              <li style={{ padding: "2rem 0" }}>
                Mix all of the marinade ingredients together and pour over the
                chicken. Give everything a good mix, then cover and chill for at
                least 1 hr. This can be done up to a day in advance.
              </li>
              <li>
                Heat the grill. Lift the chicken pieces onto a rack over a
                baking tray. Brush over a little oil and grill for 8 mins on
                each side or until lightly charred and completely cooked
                through.
              </li>
            </ul>
          </aside>
        </section>
      </aside>
    </main>
  );
};
export default Recipe;
