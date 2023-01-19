import { useState, useEffect } from "react";
import TodoItem from "./components/todo-item";
import {
  getAllTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./utils/handle-api";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");
  useEffect(() => {
    getAllTodo(setTodos);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center mt-28">
        <h1 className="text-5xl font-semibold">Todo App</h1>
        <div className="flex items-end justify-center mt-5 w-2/5">
          <input
            className="mr-4 p-4 border-b-2 w-full border-black outline-none"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Todo..."
          />
          <button
            className="bg-black py-3 px-8 text-white hover:bg-gray-800 active:bg-gray-500 active:text-white"
            onClick={() => {
              isUpdating
                ? updateTodo(todoId, text, setText, setTodos, setIsUpdating)
                : addTodo(text, setText, setTodos);
            }}
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div className="mt-5 w-2/5">
          {todos.map((todo) => (
            <TodoItem
              text={todo.text}
              key={todo._id}
              updateMode={() => updateMode(todo._id, todo.text)}
              deleteTodo={() => deleteTodo(todo._id, setTodos)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
