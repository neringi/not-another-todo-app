import { createContext, useEffect, useState } from 'react';
import { Todo } from "../lib/types";

type TodosContextProviderProps = {
    children: React.ReactNode;
}

type TTodosContext = {
    todos: Todo[],
    totalTodos: number,
    completedTodos: number,
    handleAddTodo: (todoText:string) => void,
    handleToggleTodo: (id:number) => void,
    handleDeleteTodo: (id:number) => void,
}
export const TodosContext = createContext<TTodosContext | null>(null);

const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
        return JSON.parse(savedTodos);
    } else {
        return [];
    }
}
export default function TodosContextProvider({ children }: TodosContextProviderProps) {

    


    // STATE
  const [todos, setTodos] = useState <Todo[]>(getInitialTodos);

  // DERIVED STATE
  const totalTodos = todos.length;
  const completedTodos = todos.filter((x) => x.isCompleted).length;

  // SIDE EFFECTS
  // example of fetching data from an api to populate todos list as you load page
//   useEffect( () => {
//     const fetchTodos = async () => {
//        const response = await fetch("https://bytegrad.com/course-assets/api/todos");
//        const todos = await response.json();
//        setTodos(todos);
//     };
//     fetchTodos();
//   },[]);

    // as todos is updated, data is written to localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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
    <TodosContext.Provider
        value = {{
            todos,
            totalTodos,
            completedTodos,
            handleAddTodo,
            handleToggleTodo,
            handleDeleteTodo,
        }}
    >
        { children }
    </TodosContext.Provider>
  );
}

