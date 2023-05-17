import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };

  const decrement = (value = 1) => {
    if (counter > 0) {
      setCounter((current) => current - value);
    }
  };
  const resetCounter = () => {
    setCounter(initialValue);
  };

  const onNewQuote = () => {
    increment();
  };

  return {
    counter,
    increment,
    decrement,
    resetCounter,
    onNewQuote,
  };
};
