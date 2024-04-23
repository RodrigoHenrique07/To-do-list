import { ReactNode, createContext, useState } from 'react';

interface UpdateTaskContextType {
  isUpdate: boolean;
  handleUpdateTrue: () => void;
  handleUpdateFalse: () => void;
}

export const UpdateTaskContext = createContext<UpdateTaskContextType>({
  isUpdate: false,
  handleUpdateTrue: () => {},
  handleUpdateFalse: () => {}
});

interface UpdateProps {
  children: ReactNode;
}

export function UpdateTaskContextProvider({ children }: UpdateProps) {
  const [isUpdate, setIsUpdate] = useState(false);

  function handleUpdateTrue() {
    setIsUpdate(true);
  }
  function handleUpdateFalse() {
    setIsUpdate(false);
  }

  return (
    <UpdateTaskContext.Provider
      value={{ isUpdate, handleUpdateTrue, handleUpdateFalse }}
    >
      {children}
    </UpdateTaskContext.Provider>
  );
}
