import { createAsyncThunk } from "@reduxjs/toolkit";

// const fetchUser = () => {
//   const response = fetch(
//     "https://jsonplaceholder.typicode.com/todos?_limit=10"
//   );
//   const data = response.json();
//   return data;
// };

export const getUserById = createAsyncThunk(
  "user/by-id",

  async (id, thunkApi) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (!response.ok) throw new Error("Ошибка получения данных");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
