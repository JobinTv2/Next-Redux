import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 2,
  todos: [
    { id: 1, content: 'Hit the gym' },
    { id: 2, content: 'Meet George' },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newTodoList = {
        id: Math.random(),
        content: action.payload.content,
      };
      state.count = state.count++;
      state.todos.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const { addToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;
