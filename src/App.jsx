const App = () => {
  return (
    <>
    <section className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
     <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">
      {/* <!-- Title --> */}
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-100">
        To-Do List
      </h1>

      {/* <!-- Input and Add Button --> */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          id="input"
          className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          id="button"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Add
        </button>
        <button className="text-2xl cursor-pointer" id="removeall">🗑️</button>
      </div>

      {/* <!-- Filter Buttons --> */}
      <div className="flex gap-2 mb-4 justify-center">
        <button
          id="filter-all"
          className="cursor-pointer bg-gray-600 px-3 py-1 rounded-lg hover:bg-gray-500 transition-colors"
        >
          All
        </button>
        <button
          id="filter-completed"
          className="cursor-pointer bg-green-600 px-3 py-1 rounded-lg hover:bg-green-500 transition-colors"
        >
          Completed
        </button>
        <button
          id="filter-pending"
          className="cursor-pointer bg-yellow-600 px-3 py-1 rounded-lg hover:bg-yellow-500 transition-colors"
        >
         Pending
        </button>
      </div>

      {/* <!-- Task List --> */}

      <ul className="space-y-2" id="Tasks">
        {/* <!-- Tasks will be dynamically added here -->
        <!-- Example task structure: -->
        <!-- <li className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-600">
        <span>Sample Task</span>
        <button className="text-red-400 hover:text-red-600">X</button>
      </li> --> */}
      </ul>
    </div>
    </section>
    </>
  );
};

export default App;
