import React from "react";
import { NavLink } from "react-router-dom";

const Title = ({ level = 1, text = "Titre de l'application" }) => {
  let headerLevel = <h1>{text}</h1>;
  switch (level) {
    case 2:
      headerLevel = <h2>{text}</h2>;
      break;
    case 3:
      headerLevel = <h3>{text}</h3>;
      break;
    case 4:
      headerLevel = <h4>{text}</h4>;
      break;
    case 5:
      headerLevel = <h5>{text}</h5>;
      break;
    case 6:
      headerLevel = <h6>{text}</h6>;
      break;
    default:
      headerLevel = <h1>{text}</h1>;
  }
  return headerLevel;
};

const NavBar = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="About">About</NavLink>
        </li>
        <li>
          <NavLink to="Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="blog">News</NavLink>
        </li>
      </ul>
    </div>
  );
};
export { Title, NavBar };
