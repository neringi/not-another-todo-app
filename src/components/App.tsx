import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

export type Todo = {
  id: number,
  text: string;
  isCompleted: boolean;
};

function App() {
  // STATE
  const [todos, setTodos] = useState <Todo[]>([]);

  // DERIVED STATE
  const totalTodos = todos.length;
  const completedTodos = todos.filter((x) => x.isCompleted).length;

  // EVENT HANDLERS
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("You must be logged in to have more than 3 todos.");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
    
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) { 
          return { ...t, isCompleted: !t.isCompleted }
        }
        return t;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos( (prev) => prev.filter((todo) => todo.id !== id));
  };
  
  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">
        <BackgroundHeading />
        
        <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08) grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
          <Header totalTodos={totalTodos} completedTodos={completedTodos} />

          <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo} />

          <Sidebar handleAddTodo={handleAddTodo}/>
        </main>

        <Footer />       
    </div>
  )
}

export default App
