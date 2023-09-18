import React from "react";
import { Title } from "./myApps/Components/App-Component";

const About = () => {
  document.title = "About";
  return (
    <div>
      <Title level={1} text="Programming Hero About" />
    </div>
  );
};

export default About;
