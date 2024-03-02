import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'first todo', completed: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleComplete: (state, action) => {
            state.todos.map(todo => todo.id === action.payload ? todo.completed = !todo.completed : todo.completed)
        },
        updateTodo: (state, action) => {
            // state.todos.map(todo => todo.id === id ? {...todo, text} : todo)
            const { id, text } = action.payload;
            state.todos = state.todos.map(todo => (todo.id === id ? { ...todo, text } : todo));
            state.todos.map(todo => console.log(todo.id, todo.text) )
        }
    }
})

export const { addTodo, removeTodo, toggleComplete, updateTodo } = todoSlice.actions
export default todoSlice.reducer