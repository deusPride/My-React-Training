import React, { useEffect, useState } from "react";
import { Title } from "../Components/App-Component";
import "../../style.css";
import Axios from "axios";
import Card from "./components/Card";
const RandomUserGen = () => {
  const [userData, setUserData] = useState({});
  const fecthDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("Response : ", data.results[0]);
    const details = data.results[0];
    setUserData(details);
  };
  useEffect(() => {
    fecthDetails();
  }, []);
  return (
    <div className="App">
      <Title level={1} text="Random User Generator" />
      <Card details={userData} />
    </div>
  );
};

export default RandomUserGen;
