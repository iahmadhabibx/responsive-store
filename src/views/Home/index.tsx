import Banner from "../../components/Banner";
import CardsSection from "../../components/CardsSection";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";
import "./index.css";

const Home = () => {
  return (
    <main className="h-full w-full">
      <Sidebar />
      <aside className="home">
        <header className="flex items-center justify-between w-full">
          <h1>Discover Recipes</h1>
          <Search />
        </header>

        <Banner />

        <section>
          <CardsSection title="New Recipes" seeAll="See all recipes" />
        </section>
      </aside>
    </main>
  );
};
export default Home;
