import useCounter from "@/hooks/useCounter";
import React, { useMemo } from "react";

const heavet = (iteration: number) => {
  console.time("heavey start");

  for (let index = 0; index < iteration; index++) {
    console.log("ahí vamos");
  }

  console.timeEnd("heavy end");

  return `${iteration} iteration realizadas`;
};

export const MemoCounter = () => {
  const { count, increment, decrement } = useCounter(40_000);
  const myheaver = useMemo(() => heavet(count), [count]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1>Memo - useMemo {myheaver}</h1>
      <hr />
      <h4>{count}</h4>
      <h4>{count}</h4>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};
