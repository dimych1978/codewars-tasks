import { useDispatch } from "react-redux";
import { deleteTodos, toggleStatus } from "../../store/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(deleteTodos(id));
  const toggle = () => dispatch(toggleStatus(id));

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggle} />
      <span>{title}</span>
      <span className="delete" onClick={remove}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
