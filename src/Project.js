import React from "react";
import { Title } from "./myApps/Components/App-Component";

import { Link } from "react-router-dom";

const Project = () => {
  document.title = "Projects";
  return (
    <div>
      <Title level={1} text="Nonoverse's React Project" />

      <div className="links">
        <ul>
          <li>
            <Link to="counterApp">Counter App</Link>
          </li>
          <li>
            <Link to="randomUserGenerator">random User Generator App</Link>
          </li>
          <li>
            <Link to="todolist">Todo list</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
