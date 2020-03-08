import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar state React!"
    },
    {
      text: "Belajar prop React!"
    },
    {
      text: "Belajar component React!"
    },
    {
      text: "Belajar redux di React!"
    },
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar state React!"
    },
    {
      text: "Belajar prop React!"
    },
    {
      text: "Belajar component React!"
    },
    {
      text: "Belajar redux di React!"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
