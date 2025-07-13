import { createContext, useContext } from "react";

type todoType = {
  id: number;
  todos: string;
  completed: boolean;
}[];

const TodoContext = createContext<{ todo: todoType }>({
  todo: [
    {
      id: 1,
      todos: "Todo Msg",
      completed: true,
    },
  ],
});

export const useTodo = (): { todo: todoType } => {
  return useContext(TodoContext);
};
