import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            description: "todo description",
            completed: false
        }
    ],
    addTodo: () => { },
    deleteTodo: () => { },
    editTodo: () => { },
    toggleComplete: () => { }
})

export const TodoContextProvider = TodoContext.Provider

export default function useTodo() {
    return useContext(TodoContext)
}