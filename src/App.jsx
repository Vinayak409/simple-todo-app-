import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTodo, setEditingTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingTodo(todos[index]);
  };

  const saveTodo = () => {
    if (editingTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = editingTodo;
      setTodos(updatedTodos);
      setEditingIndex(null);
      setEditingTodo("");
    }
  };

  return (
    <div>
      <h1>Simple Todo App</h1>
      <div>
        <input
          type="text"
          value={editingIndex !== null ? editingTodo : newTodo}
          onChange={(e) =>
            editingIndex !== null
              ? setEditingTodo(e.target.value)
              : setNewTodo(e.target.value)
          }
          placeholder="Enter a new todo"
        />
        {editingIndex !== null ? (
          <button onClick={saveTodo}>Save</button>
        ) : (
          <button onClick={addTodo}>Add Todo</button>
        )}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button onClick={() => editTodo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
