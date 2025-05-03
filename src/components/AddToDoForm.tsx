import { useState } from "react";
import Button from "./Button";

type AddTodoFormProps = {
    handleAddTodo: (todoText: string) => void;
}

export default function AddToDoForm({ handleAddTodo }: AddTodoFormProps) {
  const [todoText, setTodoText] = useState("Hire Neringa 🤝");


  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      handleAddTodo(todoText);
      setTodoText("");
    }}
    >
        <h2 className="font-medium text-[16px] text-[#231d15]">Add a todo</h2>
        <input type="text" className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px] bg-white"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        />
        <Button>Add to list</Button>
    </form>
  )
}
