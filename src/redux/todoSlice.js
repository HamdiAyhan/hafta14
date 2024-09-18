import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: 'Ekmek Al', completed: false },
        { id: 2, title: 'Tuvaleti Temizle', completed: false },
        { id: 3, title: 'Markete Git', completed: true },
        { id: 4, title: 'Keidiyi Öp', completed: false },
        { id: 5, title: 'Böcüyü kovala', completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },

    },
});


export const { addTodo, toggleComplete ,deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;