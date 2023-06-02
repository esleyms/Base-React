import React, { useState } from "react";
import { MemorizedChildThree } from "./MemorizedChildThree";

const ParentThree = () => {
  const [count, setCount] = useState(0);

  console.log("ParentThree Render");

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <MemorizedChildThree />
    </div>
  );
};

export default ParentThree;


