type CounterProps = {
  totalTodos: number;
  completedTodos: number;
};

export default function Counter({ totalTodos, completedTodos }: CounterProps) {
  return (
    <p> <b> {completedTodos} </b> / {totalTodos} to dos completed</p>
  )
}
