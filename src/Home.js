import React from "react";

import { Title } from "./myApps/Components/App-Component";

const Home = () => {
  document.title = "Home";
  return (
    <div>
      
      <Title level={1} text="Programming Hero Home" />
    </div>
  );
};

export default Home;
