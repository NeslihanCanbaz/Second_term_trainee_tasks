import { useState } from 'react'
import Clock from './components/Clock'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
    }
    setTodos([...todos, newTodo])
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="app">
      <Clock />

      <h1>Yapılacaklar Listesi</h1>

      <TodoInput onAddTodo={addTodo} />

      <TodoList todos={todos} onDelete={deleteTodo} />

      {todos.length > 0 && (
        <p className="stats">{todos.length} görev</p>
      )}
    </div>
  )
}

export default App
