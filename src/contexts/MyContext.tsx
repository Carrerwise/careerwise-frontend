import { createContext } from 'react';

interface MyContextType {
  myVariable: string;
  setMyVariable: (value: string) => void;
}

export const MyContext = createContext<MyContextType>({
  myVariable: '',
  setMyVariable: () => {},
});
