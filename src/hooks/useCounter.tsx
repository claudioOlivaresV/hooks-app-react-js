import { useState } from "react";
export default function useCounter(intialValue = 1) {
  const [count, setCount] = useState(intialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
}
