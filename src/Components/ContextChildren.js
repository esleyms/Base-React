import React from 'react';

export const ChildA = () => {
  console.log('ChildA Render');
  return (
    <>
      <div>ChildA</div>
      <ChildB />
    </>
  );
};

const ChildB = () => {
  console.log('ChildB Render');
  return (
    <div>
      <div>Child B</div>
      <ChildC />
    </div>
  );
};

const ChildC = () => {
  console.log('ChildC Render');
  return (
    <div>
      <div>Child C</div>
    </div>
  );
};

export default ChildA;









