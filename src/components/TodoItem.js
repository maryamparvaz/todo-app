import React from "react";

function TodoItem({
  todo,
  editId,
  editText,
  startEdit,
  handleEditChange,
  handleEditKey,
  saveEdit,
  deleteTodo,
  toggleTodo,
}) {
  return (
    <li
      className={`flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl px-4 py-3 shadow group border ${todo.completed ? "opacity-60" : ""}`}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`w-7 h-7 flex items-center justify-center rounded-full border-2 mr-2 transition focus:outline-none focus:ring-2 focus:ring-blue-300 ${
          todo.completed
            ? "bg-green-400 border-green-400 text-white"
            : "bg-white border-gray-300 text-gray-400 hover:bg-blue-100"
        }`}
        title={todo.completed ? "Done" : "Undone"}
      >
        {todo.completed ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        ) : (
          <span className="block w-3 h-3 rounded-full bg-gray-300"></span>
        )}
      </button>
      {/* Edit input or text */}
      <div className="flex-1 flex items-center gap-2">
        {editId === todo.id ? (
          <div className="flex flex-row items-center gap-1 w-full">
            <input
              className="border-2 border-blue-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2 w-2/3 max-w-xs"
              value={editText}
              onChange={handleEditChange}
              onBlur={() => {}}
              onKeyDown={(e) => handleEditKey(e, todo.id)}
              autoFocus
              dir="auto"
            />
            <button
              className="px-3 py-1 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition"
              onClick={() => saveEdit(todo.id)}
              type="button"
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <span
              className={`flex-1 select-none text-lg transition ${
                todo.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
              dir="auto"
            >
              {todo.text}
            </span>
            {/* Status as colored text, clickable */}
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`text-xs font-bold px-2 py-1 rounded transition select-none cursor-pointer ${todo.completed ? "bg-green-100 text-green-700 border border-green-200 hover:bg-green-200" : "bg-red-100 text-red-700 border border-red-200 hover:bg-red-200"}`}
              title="Click to toggle status"
            >
              {todo.completed ? "Done" : "Undone"}
            </span>
          </>
        )}
      </div>
      {/* Edit and Delete buttons */}
      <div className="flex items-center gap-1 ml-2 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={() => startEdit(todo.id, todo.text)}
          className="text-blue-500 hover:text-blue-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          title="Edit"
          disabled={editId === todo.id}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 10-4-4l-8 8v3zm0 0v3a1 1 0 001 1h3" /></svg>
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
          title="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </li>
  );
}

export default TodoItem; 