import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getAllTodo = (setTodos) => {
  axios.get(baseUrl).then(({ data }) => {
    setTodos(data);
  });
};

const addTodo = (text, setText, setTodos) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(() => {
      setText("");
      getAllTodo(setTodos);
    })
    .catch((error) => console.log(error));
};

const updateTodo = (todoId, text, setText, setTodos, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text })
    .then(() => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodos);
    })
    .catch((error) => console.log(error));
};

const deleteTodo = (_id, setTodos) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then(() => {
      getAllTodo(setTodos);
    })
    .catch((error) => console.log(error));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
