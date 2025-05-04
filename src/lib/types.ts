export type AddTodoFormProps = {
    handleAddTodo: (todoText: string) => void;
};

export type Todo = {
  id: number,
  text: string;
  isCompleted: boolean;
};

export type ButtonProps = {
    buttonType?: 'primary' | 'secondary'; 
    children: React.ReactNode;
};

export type CounterProps = {
    totalTodos: number;
    completedTodos: number;
};



export type HeaderProps = {
    totalTodos: number;
    completedTodos: number;
};
