import React, { useEffect, useState, useRef } from 'react';

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const clearTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
  };

  return (
    <div>
      Timer Hook - {timer}
      <button onClick={clearTimer}>Limpar Timer Hook</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HookTimer />
    </div>
  );
}

export default App;

