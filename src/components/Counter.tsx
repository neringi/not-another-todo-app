import { useState } from "react"

export default function Counter({ todos }) {
  return (
    <p> <b> {todos.filter((x) => x.isCompleted).length} </b> / {todos.length} to dos completed</p>
  )
}
