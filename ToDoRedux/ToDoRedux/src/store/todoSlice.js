import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      if (!response.ok) throw new Error("Ошибка получения данных");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      if (!response.ok)
        throw new Error("Невозможно удалить дело. Ошибка на сервере");
      dispatch(removeToDo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleStatus = createAsyncThunk(
  "todos/toggleStatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.todos.find(todo => todo.id === id);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: !todo.completed }),
        }
      );
      if (!response.ok)
        throw new Error("Невозможно изменить переключатель. Ошибка на сервере");
      const data = await response.json();
      dispatch(toggleToDoCompleted({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodos = createAsyncThunk(
  "todos/addNewTodos",
  async function (text, {rejectWithValue, dispatch}) {
    try {
      const todo = {
        userId: 1,
        completed: false,
        title: text,
      }
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(todo),
        }
      );
      if(!response.ok)throw new Error('Сервер не дает добавить задачу');
      const data = await response.json();
      console.log(data);
      dispatch(addToDo(data))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

const handlerError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addToDo(state, action) {
      state.todos.push(action.payload);
    },
    removeToDo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleToDoCompleted(state, action) {
      const toggleToDo = state.todos.find(
        todo => todo.id === action.payload.id
      );
      toggleToDo.completed = !toggleToDo.completed;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: state => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolves";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: handlerError,
    [deleteTodos.rejected]: handlerError,
    [toggleStatus.rejected]: handlerError,
  },
});

export const { addToDo, removeToDo, toggleToDoCompleted } = todoSlice.actions;
export default todoSlice.reducer;
