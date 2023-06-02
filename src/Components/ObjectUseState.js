import React, { useState } from "react";

const initSate = {
  fname: "Bruce",
  lnamme: "Wayne",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initSate);

  const changeName = () => {
   // person.fname = "Clark";
    //person.lnamme = "Kent";
   // setPerson(person);

   const newPerson = {...person}
   newPerson.fname = 'Clark'
   newPerson.lnamme = 'Kent'
   setPerson(newPerson)
  };

    console.log('ObjetUseState Render')

  return (
    <div>
      <button onClick={changeName}>
        {person.fname}
        {person.lnamme}
      </button>
    </div>
  );
};
