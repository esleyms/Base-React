import React from "react";

const ChildThree = () => {
  console.log("ChildThree Render");
  return <div>ChildThree Component</div>;
};

export const MemorizedChildThree = React.memo(ChildThree);







