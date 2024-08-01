import { createContext, useContext } from "react";

// Creating context and exporting along with a hook
export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
}

// Provider component to wrap the app with the created context
export const TodoProvider = TodoContext.Provider;
