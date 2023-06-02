//import React, { useState } from 'react';
//import useUserInput from '../hooks/useUserInput';

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useUserInput('');
  const [lastName, bindLastName, resetLastName] = useUserInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLastName} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
