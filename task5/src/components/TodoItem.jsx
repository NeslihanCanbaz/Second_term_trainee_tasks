function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Görevi sil"
      >
        Sil
      </button>
    </li>
  )
}

export default TodoItem
