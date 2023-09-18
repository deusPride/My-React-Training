import React, { useEffect, useState } from "react";
import Article from "./myApps/blog/blog";

import { Title } from "./myApps/Components/App-Component";
document.title = "Blog";
const News = () => {
  const [Blogs, updateBlogs] = useState([
    {
      id: 1,
      title: "Post numero",
      content: "Voici un article",
      author: "auteur",
    },
    {
      id: 2,
      title: "Post numero",
      content: "Voici un article",
      author: "Nono",
    },
    {
      id: 3,
      title: "Post numero",
      content: "Voici un article",
      author: "Nono",
    },
    {
      id: 4,
      title: "Post numero",
      content: "Voici un article",
      author: "Kuma",
    },
  ]);

  const handleDelete = (id) => {
    const newBlogsList = Blogs.filter((blog) => blog.id !== id);
    updateBlogs(newBlogsList);
  };
  const publish = () => {
    const newBlogsList = Blogs.push({
      id: Blogs.length + 2,
      title: "Post numero",
      content: "Voici un article",
      author: "Kuma",
    });
    console.log("addind");
    updateBlogs(newBlogsList);
    console.log("added");
  };
  useEffect(() => {
    console.log("UseEffect Ran !!");
  }, [Blogs]);

  return (
    <div>
      <Title level={1} text="Programming Hero Blog" />
      <div className="blog-list">
        <Article blogs={Blogs} handleDelete={handleDelete} />
      </div>

      <button onClick={() => publish}>Publier</button>
    </div>
  );
};

export default News;
