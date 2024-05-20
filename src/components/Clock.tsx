import { useEffect, useState } from "react";

function addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes * 60000);
  }
  
  export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date())
      }, 1000);

      return () => {
        clearInterval(interval); 
      };
    }, [])
  
 /*    const handleClick1 = () => {
      setTime(addMinutes(time, 10));
      setTime(addMinutes(time, 10));
    }; */
  
/*     const handleClick2 = () => {
      setTime((previousTime) => addMinutes(previousTime, 10));
      setTime((previousTime) => addMinutes(previousTime, 10));
    }; */

    const handleClick2 = () => {
      setTime(prevTime => {
        const newTime = addMinutes(prevTime, 10);
        setTimeout(() => setTime(addMinutes(newTime, 10)), 0); // Ensures the second update is applied after the first
        return newTime;
      });
    };

    return (
      <div>
        <p>{time.toLocaleTimeString()}</p>
        {/* <button onClick={handleClick1}>+ 10 Minutes</button> */}
        <button onClick={handleClick2}>+ 10 Minutes</button>
      </div>
    );
  }

  /* 
  import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(refresh, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const refresh = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}
 */
  
