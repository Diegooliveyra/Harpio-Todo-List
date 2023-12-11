'use client';
import { ITaskDTO } from '@/service/tasks.interface';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type todoContextProps = {
  todos: ITaskDTO[];
  setTodos: Dispatch<SetStateAction<ITaskDTO[]>>;
};

export const TodoContext = createContext<todoContextProps>(
  {} as todoContextProps
);

type TodoContextProviderProps = {
  children: React.ReactNode;
};
export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todos, setTodos] = useState<ITaskDTO[]>([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
