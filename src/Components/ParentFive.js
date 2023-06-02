import React, { useState, useMeno } from "react";
import { MemorizedChildFive } from "./MemorizedChildFive";

export const ParentFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");
  const person = {
    fnamae:"Bruce",
    lname: "Wayne"
  }


    const memoizedPerson = useMeno(() => person, [] )
    

  console.log("ParentFive Render");

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("codevolution")}>Change name</button>
      <MemorizedChildFive name={name} person={memoizedPerson} />
    </div>
  );
};

