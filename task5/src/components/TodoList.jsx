import TodoItem from './TodoItem'

function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty-message">Henüz görev yok. Bir tane ekle!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList
