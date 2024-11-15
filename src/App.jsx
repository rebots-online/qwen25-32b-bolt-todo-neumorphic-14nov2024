import React, { useState } from 'react'
    import './index.css'

    function App() {
      const [todos, setTodos] = useState([])
      const [inputValue, setInputValue] = useState('')

      const addTodo = () => {
        if (inputValue.trim()) {
          setTodos([...todos, inputValue])
          setInputValue('')
        }
      }

      const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
          <h1 className="text-4xl font-bold mb-8 text-teal-900">Todo App</h1>
          <div className="bg-white p-6 rounded-lg shadow-neumorphic w-full max-w-md border-t-2 border-teal-500">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo..."
              className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:border-teal-500 bg-white shadow-neumorphic-inner"
            />
            <button
              onClick={addTodo}
              className="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 shadow-neumorphic"
            >
              Add Todo
            </button>
          </div>
          <ul className="mt-8 w-full max-w-md">
            {todos.map((todo, index) => (
              <li key={index} className="bg-white p-4 mb-2 flex justify-between items-center rounded shadow-neumorphic border-t-2 border-teal-500">
                <span>{todo}</span>
                <button
                  onClick={() => removeTodo(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    export default App
