import React from "react";

function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-2 mb-6">
      <button
        className={`px-4 py-1.5 rounded-full font-medium shadow-sm border transition ${
          filter === "all"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-gray-100 text-blue-700 border-blue-200 hover:bg-blue-100"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`px-4 py-1.5 rounded-full font-medium shadow-sm border transition ${
          filter === "done"
            ? "bg-green-500 text-white border-green-500"
            : "bg-gray-100 text-green-700 border-green-200 hover:bg-green-100"
        }`}
        onClick={() => setFilter("done")}
      >
        Done
      </button>
      <button
        className={`px-4 py-1.5 rounded-full font-medium shadow-sm border transition ${
          filter === "undone"
            ? "bg-red-500 text-white border-red-500"
            : "bg-gray-100 text-red-700 border-red-200 hover:bg-red-100"
        }`}
        onClick={() => setFilter("undone")}
      >
        Undone
      </button>
    </div>
  );
}

export default FilterBar; 