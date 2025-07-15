import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  filter,
  editId,
  editText,
  startEdit,
  handleEditChange,
  handleEditKey,
  saveEdit,
  deleteTodo,
  toggleTodo,
}) {
  const FILTERS = {
    all: () => true,
    done: (t) => t.completed,
    undone: (t) => !t.completed,
  };
  const filtered = todos.filter(FILTERS[filter]);
  return (
    <ul className="space-y-3">
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editId={editId}
          editText={editText}
          startEdit={startEdit}
          handleEditChange={handleEditChange}
          handleEditKey={handleEditKey}
          saveEdit={saveEdit}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
      {filtered.length === 0 && (
        <li className="text-center text-gray-400">No tasks found</li>
      )}
    </ul>
  );
}

export default TodoList; 