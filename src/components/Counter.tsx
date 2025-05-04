import { useTodosContext } from "../contexts/hooks"

export default function Counter() {
  const { totalTodos, completedTodos } = useTodosContext();
  return (
    <p> <b> {completedTodos} </b> / {totalTodos} to dos completed</p>
  )
}
