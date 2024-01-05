import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import "./index.css";
import HomeIcon from "../../assets/ts-icons/HomeIcon";
import RecipesIcon from "../../assets/ts-icons/RecipesIcon";
import CommunityIcon from "../../assets/ts-icons/CommunityIcon";
import HeartIcon from "../../assets/ts-icons/HeartIcon";
import SettingsIcon from "../../assets/ts-icons/SettingsIcon";

const Sidebar = () => {
  const [sidebarItems] = useState([
    { id: 1, title: "Home", icon: HomeIcon },
    { id: 2, title: "Recipes", icon: RecipesIcon },
    { id: 3, title: "Community", icon: CommunityIcon },
    { id: 4, title: "Saved recipes", icon: HeartIcon },
  ]);
  const [isHovered, setHovered] = useState(0);
  const [isSelected, setSelected] = useState(0);

  return (
    <aside className="sidebar">
      <section className="bars top-bar flex items-center justify-center">
        <img src={Logo} alt="Meal Deal" />
        <div className="top-content flex flex-col">
          <h2>Meal Deal</h2>
          <small>Recipes for healthy life</small>
        </div>
      </section>
      <section className="bars bottom-bar">
        <ul className="w-full flex items-start flex-col">
          {React.Children.toArray(
            sidebarItems.map((item) => (
              <li
                style={{ gap: ".5rem" }}
                className="inline-flex items-center"
                onMouseOver={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(0)}
              >
                <item.icon
                  fill={isHovered === item.id ? "#089B12" : "#647181"}
                />
                <small className="li-title">{item.title}</small>
              </li>
            ))
          )}
        </ul>

        <footer className="inline-flex items-center">
            <SettingsIcon />
            <small className="li-title">Settings</small>
        </footer>
      </section>
    </aside>
  );
};
export default Sidebar;
