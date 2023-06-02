import React, { useState } from "react";

const initSate = ["Bruce", "Wayne"];

export const ArrayUseState = () => {
  const [person, setPerson] = useState(initSate);

  const handleClick = () => {
    const newPerson = [...person];
    newPerson.push("Clark");
    newPerson.push("Kent");
    setPerson(newPerson);
  };

  console.log("ArrayUseState Render");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {person.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};
