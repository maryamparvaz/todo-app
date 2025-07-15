import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";

const FILTERS = {
  all: () => true,
  done: (t) => t.completed,
  undone: (t) => !t.completed,
};

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("[localStorage] Wrote todos:", todos);
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: editText } : t))
    );
    setEditId(null);
    setEditText("");
  };

  const handleEditKey = (e, id) => {
    if (e.key === "Enter") saveEdit(id);
    if (e.key === "Escape") {
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700 flex items-center justify-center gap-2">
          <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-blue-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z' /></svg>
          Todo App
        </h1>
        {/* Add Todo Form */}
        <TodoForm input={input} onInputChange={(e) => setInput(e.target.value)} onSubmit={addTodo} />
        {/* Filter Buttons */}
        <FilterBar filter={filter} setFilter={setFilter} />
        {/* Todo List */}
        <TodoList
          todos={todos}
          filter={filter}
          editId={editId}
          editText={editText}
          startEdit={startEdit}
          handleEditChange={handleEditChange}
          handleEditKey={handleEditKey}
          saveEdit={saveEdit}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;