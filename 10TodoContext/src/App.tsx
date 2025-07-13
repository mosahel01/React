import { useState } from "react";
import "./App.css";
import { TodoContext } from "./contexts";

type addTodoType = {
  id: number;
  prev: string;
};

function App() {
  const [todo, setTodo] = useState<addTodoType[]>([]);

  const addTodo = (todo: string) => {
    setTodo((prev: addTodoType[]) => [{ id: Date.now(), prev: todo }, ...prev]);
  };

  const updateTodo = (id: number, todo: string) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, prev: todo } : prevTodo
      )
    );
    // ye ast mentos tariqa
    // prev.map((eachValue) => {
    //   if (eachValue.id === id) {
    //     todo;
    //   } else {
    //     console.log("hola");
    //   }
    // });
  };

  const deleteTodo = (id: number) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
    // ye bi same ast
  };

  const toggleTodo = (id: number) => {
    setTodo(())
  }

  return (
    <TodoContext.Provider
      value={{ addTodo, deleteTodo, todos, toggleTodo, updateTod }}
    >
      <div className='bg-[#172842] min-h-screen py-8 '>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white '>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2 '>
            Manage your todos
          </h1>
          <div className='mb-4 '>todo form goes here </div>
          <div className='flex flex-wrap gap-y-3 '>
            Loop and Add todo item here
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
