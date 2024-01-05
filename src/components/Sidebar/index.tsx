import React, { useState } from "react";
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
  const [sidebarItemsResp] = useState([
    { id: 1, icon: HomeIcon },
    { id: 2, icon: RecipesIcon },
    { id: 3, icon: CommunityIcon },
    { id: 4, icon: HeartIcon },
    { id: 5, icon: SettingsIcon },
  ]);
  const [isHovered, setHovered] = useState(0);
  const [isSelected, setSelected] = useState(1);

  return (
    <React.Fragment>
      <aside className="sidebar">
        <section className="bars bottom-bar">
          <ul className="w-full flex items-start flex-col">
            {React.Children.toArray(
              sidebarItems.map((item) => (
                <li
                  style={{ gap: ".5rem" }}
                  className={`inline-flex items-center ${
                    isSelected === item.id && "selected"
                  } `}
                  onClick={() => setSelected(item.id)}
                  onMouseOver={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(0)}
                >
                  <item.icon
                    fill={
                      isHovered === item.id || isSelected === item.id
                        ? "#089B12"
                        : "#AAB1BB"
                    }
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
      <aside className="sidebar-responsive">
        <ul className="w-full flex items-start justify-between">
          {React.Children.toArray(
            sidebarItemsResp.map((item) => (
              <li
                style={{ gap: ".5rem" }}
                className={`inline-flex items-center ${
                  isSelected === item.id && "selected"
                } `}
                onClick={() => setSelected(item.id)}
                onMouseOver={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(0)}
              >
                <item.icon
                  fill={
                    isHovered === item.id || isSelected === item.id
                      ? "#089B12"
                      : "#AAB1BB"
                  }
                />
              </li>
            ))
          )}
        </ul>
      </aside>
    </React.Fragment>
  );
};
export default Sidebar;
