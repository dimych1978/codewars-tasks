import TodoItem from "../TodoItems/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
const todos = useSelector(state => state.todos.todos);
console.log(todos)
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} 
        // toggleToDoCompleted={toggleToDoCompleted} 
        // removeToDo={removeToDo} 
        {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
