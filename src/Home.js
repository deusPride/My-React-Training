import React from "react";

import { Title } from "./myApps/Components/App-Component";

const NumberList = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number, key) => <li key={key}>{number}</li>);
  return <ul>{listItems}</ul>;
};

const Home = () => {
  document.title = "Home";
  return (
    <div>
      <Title level={1} text="Nonoverse Portfolio Home" />
    </div>
  );
};

export default Home;
