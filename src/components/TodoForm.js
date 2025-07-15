import React from "react";

function TodoForm({ input, onInputChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex mb-6 gap-2">
      <input
        className="flex-1 border-2 border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        value={input}
        onChange={onInputChange}
        placeholder="New task..."
        dir="auto"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition"
      >
        +
      </button>
    </form>
  );
}

export default TodoForm; 