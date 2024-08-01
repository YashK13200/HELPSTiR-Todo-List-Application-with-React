import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <input
            type="text"
            className={`border outline-none bg-transparent rounded-lg ${
              isTodoEditable ? "border-black/10 px-2" : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
              if (todo.completed) return;

              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={toggleExpand}
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-2">
          <p>Description: {todo.description || 'Add description'}</p>
          <p>Last updated: {new Date(todo.updatedAt).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
