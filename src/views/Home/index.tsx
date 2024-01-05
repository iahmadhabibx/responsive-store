import Banner from "../../components/Banner";
import CardsSection from "../../components/CardsSection";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";
import Logo from "../../assets/logo.svg";
import "./index.css";

const Home = () => {
  return (
    <main className="h-full w-full">
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
        <Banner />

        <section>
          <CardsSection title="New Recipes" seeAll="See all recipes" />
        </section>
      </aside>
    </main>
  );
};
export default Home;
