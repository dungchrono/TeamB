import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
// Create a new context
const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false); // Add status state

  const updateData = (newData) => {
    let newArray = [...data];
    newArray.push(newData);
    setData(newArray);
  };

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  const addItem = (input) => {
    const form = input;
    console.log('====================================');
    console.log(form);
    console.log('====================================');
    if (data.length <= 0) {
      updateData(form);
    } else {
      const statusCheck = data.some((item) => item.id == form.id);
      if (statusCheck) {
        toast.error('Product exits')
      } else {
        const checkTypeMain = data.some((item) => item.category1 == form.category1);
        const checkTypeSecond = data.some((item) => item.category2 == form.category2);

        if (!checkTypeMain || !checkTypeSecond) {
          toast.error('Please choose correct type products');
        } else {
          if (data.length > 3) {
          toast.error('My minimum product is 3 product')
        } else {
          updateData(form);
        }
        }
      }
    }
    setStatus(true);
  }

  const removeItem = (id) => {
    const newItem = data.filter((item) => item.id != id);
    setData(newItem);
  }

  console.log('====================================');
  console.log(data);
  console.log('====================================');

  return (
    <MyContext.Provider value={{ data, updateData, status, updateStatus,addItem,removeItem }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useMyContext = () => {
  return useContext(MyContext);
};
