import { useState } from "react";
import Header from "../components/Header";
import TodoComputed from "../components/TodoComputed";
import TodoCreate from "../components/TodoCreate";
import TodoFilter from "../components/TodoFilter";
import TodoList from "../components/TodoList";

const initialStateTodos = [
  { id: 1, title: "Go to the gym", completed: true },
  { id: 2, title: "Completed online curse of React", completed: false },
  { id: 3, title: "10 min to meditation", completed: true },
  { id: 4, title: "Pick up groceries", completed: false },
  { id: 5, title: "Play music in the house", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain bg-gray-300 min-h-screen"
    >
      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed />
        <TodoFilter />
      </main>

      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
