import BannerImage from "../../assets/banner_image.png";
import "./index.css";

const Banner = () => {
  return (
    <aside className="banner w-full flex justify-between">
      <div className="banner-texts">
        <h1>Poached eggs with broccoli and avocado</h1>
        <button>View Recipe</button>
      </div>
      <img className="banner-dish" src={BannerImage} alt="Banner" />
    </aside>
  );
};
export default Banner;
