import React, { FC } from "react";
import TimeIcon from "../../assets/time.svg";
import LevelIcon from "../../assets/level.svg";
import "./index.css";

interface RecipeCardProps {
  image: string;
  title: string;
  tags: string[];
  level: string;
  time: string;
}

const RecipeCard: FC<RecipeCardProps> = (props) => {
  const { image, title, tags, time, level } = props;
  return (
    <div className="recipe-card flex items-center">
      <img src={image} alt={title} />
      <section>
        <h3 className="card-title">{title}</h3>
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
  );
};
export default RecipeCard;
