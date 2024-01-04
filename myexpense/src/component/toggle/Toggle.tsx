import React, { useState, createContext } from 'react';

interface DineshProps {
  children: React.ReactNode;
}

export const MyContext = createContext<any>(null);

const Toggle: React.FC<DineshProps> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const click = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <MyContext.Provider value={{ toggle, setToggle, click }}>
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default Toggle;
