import { createContext, useContext } from "react";

type todoType = {
  id: number;
  todo: string;
  completed: boolean;
}[];

type TodoContextType = {
  todos: todoType;
  addTodo: (todo: string) => void;
  updateTodo: (id: number, todo: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: true,
    },
  ],
  addTodo: (todo): void => {},
  updateTodo: (id, todo): void => {},
  deleteTodo: (id): void => {},
  toggleTodo: (id): void => {},
});

export const useTodo = (): TodoContextType => {
  return useContext(TodoContext);
};
