import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { Header } from "./Header";

//App checked today - gg
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => currentTodos.map(todo => 
      todo.id === id ?
        { ...todo, completed }: 
        todo
      ))
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
  }

  const deleteSelected = ()=> {
    setTodos(currentTodos => currentTodos.filter(todo => !todo.completed))
  }


  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <Header deleteSelected={deleteSelected}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
