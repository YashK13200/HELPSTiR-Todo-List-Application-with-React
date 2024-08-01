# Todo List Application

## Overview

This project is a frontend Todo List application built with React.js. The application allows users to manage their daily tasks effectively. The key features include:

- Creating, updating, and deleting tasks.
- Marking tasks as completed.
- Searching for tasks.
- Viewing detailed descriptions in an expandable list format.

## System Design

The application uses a component-based architecture with React.js. It leverages the Context API to manage state and facilitate communication between components. The key components and their roles are as follows:

- **App Component**: The root component that manages the state of the todo list and renders the overall layout.

- **TodoForm Component**: A form component for adding new tasks to the list.

- **TodoItem Component**: Displays individual tasks with functionality to edit, delete, and toggle completion status. It also supports expanding to show additional details like description and the timestamp of the last update.

- **TodoContext**: A context provider that encapsulates the state management logic for todos, including actions for adding, updating, deleting, and toggling the completion of tasks.

## Implementation

The core functionality of the application is built using React hooks for state management and the Context API for global state management. The system uses `localStorage` to persist tasks across browser sessions.

- **Adding a Task**: Users can add tasks using the TodoForm component, which updates the global state via the `addTodo` function from the context.

- **Updating a Task**: The TodoItem component provides functionality for editing task details and marking tasks as completed or incomplete.
- 
- **Mark as Done Mark**: Allow users to mark tasks as completed..

- **Searching Tasks**: The App component includes a search input that filters tasks based on the query entered by the user.

- **Expandable List**: Tasks can be expanded to reveal additional details, including a description and the timestamp of the last update.


<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the Repository:</p>

```
git clone https://github.com/your-username/todo-list-react.git cd todo-list-react
```

<p>2. Install Dependencies:</p>

```
npm install
```

<p>3. Run the Application:</p>

```
npm run dev
```

<p>4. Building for Production To create a production build of the application run:</p>

```
npm run build
```

<h2>🍰 Contribution Guidelines:</h2>

If you'd like to contribute to this project feel free to fork the repository and submit a pull request. For major changes please open an issue first to discuss what you would like to change.

<h2>🛡️ License:</h2>

This project is licensed under the This project is open-source and available under the MIT License. See the LICENSE file for more information.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
