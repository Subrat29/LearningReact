import { useEffect, useState } from 'react'
import { TodoContextProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (desc) => {
    setTodos((allPrevTodos) => [{ id: Date.now(), description: desc, completed: false }, ...allPrevTodos])
  }

  const deleteTodo = (id) => {
    setTodos((allPrevTodos) => allPrevTodos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id, newDescription) => {
    setTodos((allPrevTodos) => allPrevTodos.map((todo) => (todo.id === id ? { ...todo, description: newDescription } : todo)))
  }

  const toggleComplete = (id) => {
    setTodos((allPrevTodos) => allPrevTodos.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed } : todo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0)
      setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
