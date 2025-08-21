import { useState } from 'react';


export const useCounter = (initialValue = 0) => {

    const [count , setCount] = useState(initialValue);

    const add = (qty = 1) => {
        setCount(prev => prev + qty);
    }

    const substract = (qty = 1) => {
        setCount (prev => prev - qty);
    }

    const reset = () => {
        setCount(initialValue);
    }

  return {count, add, substract, reset}
};