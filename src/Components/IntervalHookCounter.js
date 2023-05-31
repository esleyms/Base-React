import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [startTime, setStartTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        tick();
      }, 1000);
      setStartTime(new Date().getTime());
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  const start = () => {
    if (running) {
      console.log("O cronômetro já está em execução.");
      return;
    }

    setRunning(true);
    console.log("Cronômetro iniciado.");
  };

  const stop = () => {
    if (!running) {
      console.log("O cronômetro não está em execução.");
      return;
    }

    setRunning(false);
    console.log("Cronômetro parado. Tempo decorrido: " + elapsedTime + " segundos.");
  };

  const tick = () => {
    console.log("Tick");
    const currentTime = new Date().getTime();
    const elapsed = Math.floor((currentTime - startTime) / 1000);
    setElapsedTime(elapsed);
  };

  const reset = () => {
    setStartTime(0);
    setRunning(false);
    setElapsedTime(0);
    console.log("Cronômetro reiniciado.");
  };

  return (
    <div>
      <h1>Cronômetro</h1>
      <p>Tempo decorrido: {elapsedTime} segundos</p>
      <button onClick={start}>Iniciar</button>
      <button onClick={stop}>Parar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default Cronometro;
