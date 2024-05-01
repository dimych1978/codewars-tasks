import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodos, fetchTodos } from "./store/todoSlice";
import TodoList from "./components/TodoList/TodoList";
import InputField from "./components/InputField/InputField";

export function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addNewTodos( text));
    setText("");
  };

  useEffect(() => dispatch(fetchTodos()), [dispatch]);

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {status === "loading" && <h2>Идет загрузка...</h2>}
      {error && <h2>Произошла ошибка: {error}</h2>}
      <TodoList />
    </div>
  );
}
