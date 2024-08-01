import { useEffect, useState } from 'react';
import { TodoProvider } from "./contexts";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo, updatedAt: Date.now(), description: todo.description || '' }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo, updatedAt: Date.now() } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Load todos from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Filter todos based on the search query
  const filteredTodos = todos.filter(todo =>
    todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full p-2 mb-4 rounded bg-gray-200 text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {filteredTodos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
