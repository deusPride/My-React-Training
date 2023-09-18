import React from "react";
import { Title } from "./myApps/Components/App-Component";

const Contact = () => {
  document.title = "Contact";
  return (
    <div>
      <Title level={1} text="Contact" />
    </div>
  );
};

export default Contact;
