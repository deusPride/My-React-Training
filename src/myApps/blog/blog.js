import React from "react";

import { Title } from "../Components/App-Component";

const Article = ({ blogs,handleDelete }) => {
  return (
    <div>
      {blogs.map((item) => (
        <div className="Post-preview" key={item.id}>
          <Title level={2} text={item.title + " " + item.id} />
          <p>{item.content}</p>
          <h5 className="author">{item.author}</h5>
          <button className="delete" onClick={()=>handleDelete(item.id)}>
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
};

export default Article;
