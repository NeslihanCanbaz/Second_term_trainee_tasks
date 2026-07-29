import { useState } from 'react'

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const trimmed = text.trim()
    if (!trimmed) return

    onAddTodo(trimmed)
    setText('')
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yeni görev yaz..."
        aria-label="Yeni görev"
      />
      <button type="submit">Ekle</button>
    </form>
  )
}

export default TodoInput
