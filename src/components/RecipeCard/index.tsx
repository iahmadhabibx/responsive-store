import { useNavigate } from "react-router";
import React, { FC } from "react";
import TimeIcon from "../../assets/time.svg";
import LevelIcon from "../../assets/level.svg";
import ArrowDown from "../../assets/ar-down.svg";
import HeartSM from "../../assets/heart-sm.svg";
import "./index.css";

interface RecipeCardProps {
  image: string;
  title: string;
  tags: string[];
  level: string;
  time: string;
  size: string;
  desc?: string;
}

const RecipeCard: FC<RecipeCardProps> = (props) => {
  const { image, title, tags, time, level, size = "sm", desc = "" } = props;
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {size === "sm" ? (
        <div
          className="recipe-card flex items-center"
          onClick={() => navigate("/recipe")}
        >
          <img className="rec-img" src={image} alt={title} />
          <section>
            <h3 className="card-title large">{title}</h3>
            <aside className="chens flex items-center">
              <div className="inline-flex items-center">
                <img src={TimeIcon} alt="Time" />
                <small>{time}</small>
              </div>
              <div className="inline-flex items-center">
                <img src={LevelIcon} alt="Level" />
                <small>{level}</small>
              </div>
            </aside>

            <aside className="inline-flex items-center tag-wrapper">
              {React.Children.toArray(
                tags?.map((tag) => <p className="tag">{tag}</p>)
              )}
            </aside>
          </section>
        </div>
      ) : (
        <div
          className="recipe-card large flex items-center"
          onClick={() => navigate("/recipe")}
        >
          <img className="rec-img" src={image} alt={title} />
          <section>
            <aside className="chens flex items-center">
              <div className="inline-flex items-center">
                <img src={TimeIcon} alt="Time" />
                <small>{time}</small>
              </div>
              <div className="inline-flex items-center">
                <img src={LevelIcon} alt="Level" />
                <small>{level}</small>
              </div>
            </aside>

            <h3 className="card-title large">{title}</h3>
            {desc && <small className="desc">{desc}</small>}

            <aside className="inline-flex items-center tag-wrapper w-full">
              {React.Children.toArray(
                tags?.map((tag) => <p className="tag">{tag}</p>)
              )}
            </aside>

            <aside className="btns-container">
              <button className="btn">
                <small>Go to recipe</small>
                <img src={ArrowDown} alt="Arrow" />
              </button>
              <button className="btn outline">
                <small>Save recipe</small>
                <img src={HeartSM} alt="Heart" />
              </button>
            </aside>
          </section>
        </div>
      )}
    </React.Fragment>
  );
};
export default RecipeCard;
