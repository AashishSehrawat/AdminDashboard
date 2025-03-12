import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;
    if (running) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  const resetHandler = () => {
    setTime(0);
    setRunning(false);
  }

  const formatTime = (timeInSeconds: number) => {
    const hours = String(Math.floor(timeInSeconds / 3600));
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
    const seconds = String(timeInSeconds % 60);

    return `${hours.padStart(2, "0")} : ${minutes.padStart(2,"0")} : ${seconds.padStart(2, "0")}`;
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="appContainer">
        <h1>StopWatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <div>
              <button onClick={() => setRunning((prev) => !prev)}>
                {running ? "Stop" : "Start"}
              </button>
              <button onClick={resetHandler}>Reset</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
