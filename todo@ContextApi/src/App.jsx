
import { useState, useEffect } from "react"
import { TodoProvider } from "./context"
import TodoItem from "./components/TodoItem"
import TodoForm from "./components/TodoForm"

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (todo) =>{
    setTodos((prev)=>[ {id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id, todo) =>{
    
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? todo: prevTodo))
    
  }
  const deleteTodo = (id) =>{
    setTodos((prev) =>prev.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggleComplete = (id) =>{
      setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ?{...prevTodo,checked: !prevTodo.checked}: prevTodo))
  }
  
  useEffect(() => {
    const payload = localStorage.getItem("todos")
    if (!payload) return;
    const todos = JSON.parse(payload)

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  
  
  return (
    <TodoProvider value={{todos, createTodo, deleteTodo, updateTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {
            todos?.map((todo) =><TodoItem todo={todo} key={todo.id}/>)
          }
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
