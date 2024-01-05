import React, { FC } from "react";
import ArrowRight from "../../assets/arrow-right.svg";
import R1 from "../../assets/r_1.png";
import R2 from "../../assets/r_2.png";
import R3 from "../../assets/r_3.png";
import R4 from "../../assets/r_4.png";
import "./index.css";
import RecipeCard from "../RecipeCard";

interface CardSectionProps {
  title: string;
  seeAll: string;
}
interface Item {
  id: number;
  title: string;
  image: string;
  tags: string[];
  level: string;
  time: string;
}
const ITEMS: Item[] = [
  {
    id: 1,
    title: "Duck Confit",
    image: R1,
    tags: ["Miscellaneous", "French"],
    level: "Intermediate",
    time: "2h 30m",
  },
  {
    id: 1,
    title: "Omelette Cake",
    image: R2,
    tags: ["Vegetarian", "French"],
    level: "Beginner",
    time: "45m",
  },
  {
    id: 1,
    title: "Peanut Butter Cheesecake",
    image: R3,
    tags: ["Dessert", "American"],
    level: "Intermediate",
    time: "1h 15m",
  },
  {
    id: 1,
    title: "Escovitch Fish",
    image: R4,
    tags: ["Seafood", "Jamaican"],
    level: "Advance",
    time: "1h 30m",
  },
];

const CardsSection: FC<CardSectionProps> = (props) => {
  const { title, seeAll } = props;

  return (
    <aside className="cards-section w-full">
      <section className="sec-header w-full flex items-center justify-between">
        <h3>{title}</h3>
        <p className="inline-flex items-center">
          <span>{seeAll}</span>
          <img src={ArrowRight} alt="Arrow" />
        </p>
      </section>

      <section className="all-cards flex w-full items-center flex-wrap justify-between">
        {React.Children.toArray(
          ITEMS.map((item: Item) => <RecipeCard {...item} size="sm" />)
        )}
      </section>
    </aside>
  );
};
export default CardsSection;
