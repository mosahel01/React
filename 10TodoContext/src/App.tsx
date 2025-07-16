import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { TodoContext } from './contexts';

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    const newTodo: Todo = {
      id: Date.now(), // Use timestamp as unique ID
      todo: todoText,
      completed: false,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    const todos = storedTodos ? JSON.parse(storedTodos) : null;


    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  


  const updateTodo = (id: number, newTodoText: string) => {
    setTodos(
      prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, todo: newTodoText } : todo
        )
      // ye ast mentos tariqa
      // prev.map((eachValue) => {
      //   if (eachValue.id === id) {
      //     todo;
      //   } else {
      //     console.log("hola");
      //   }
      // });
    );
  };

  // Remove a todo by its ID
  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Toggle the completed status of a todo
  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
      }}
    >
      <div className='bg-[#172842] min-h-screen py-8 '>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white '>
          <h1 className='text-4xl font-bold text-center mb-8 mt-2 '>
            Manage Your Todos
          </h1>

          <div className='mb-4 '>
            <TodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3 '>
            {todos.map(todo => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
