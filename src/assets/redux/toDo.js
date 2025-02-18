import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.items.push({
        id: action.payload.id,
        value: action.payload.value,
        completed: false,
      });
    },
    deleteToDo(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleComplete(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.completed = !item.completed;
      }
    },
  },
});

// export const selectToDoActions = (state) => state.toDo.items;
export const { addToDo, deleteToDo, toggleComplete } = toDoSlice.actions;
export default toDoSlice;
