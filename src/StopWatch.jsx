import { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  let intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
        setNow(Date.now());
    }, 10)
  };

  let secondPassed = 0;
  if(startTime !== null && now !== null){
    secondPassed = (now - startTime) / 1000;
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <h1>Time passed: {secondPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
