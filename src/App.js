import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Counter from "./myApps/Counter/CounterApp";
import RandomUserGen from "./myApps/Random User Generator/RandomUserGen";
import TodoList from "./myApps/Todo-list/Todo";
import NotFound from "./NotFound";
import News from "./News";
import { Routes, Route } from "react-router-dom";
import { NavBar, Title } from "./myApps/Components/App-Component";
import "./style.css";

const App = () => {
  return (
    <div className="App">
      <Title level={1} text="Serval'S React portFolio" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Project />} />
        <Route path="blog" element={<News />} />
        <Route path="/Projects/counterApp" element={<Counter />} />
        <Route
          path="/Projects/randomUserGenerator"
          element={<RandomUserGen />}
        />
        <Route path="/Projects/todolist" element={<TodoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
