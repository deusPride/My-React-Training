import React, { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.text}
              onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
