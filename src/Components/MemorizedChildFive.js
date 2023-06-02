import React from "react";

const MemorizedChildFive = ({ name, person }) => {
  console.log("MemorizedChildFive Render");
  return (
    <div>
      Hello {name} {person.fname} {person.lname}
    </div>
  );
};

export { MemorizedChildFive };


