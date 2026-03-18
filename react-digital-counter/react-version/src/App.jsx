import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [sec, setSec] = useState(0);
  const [period, setPeriod] = useState("");

  useEffect(() => {
    const createTime = () => {
      const date = new Date();
      const hr = date.getHours();
      const convertedHr = hr % 12 || 12;
      setHour(convertedHr);
      setMinute(date.getMinutes());
      setSec(date.getSeconds());
      setPeriod(hr >= 12 ? "pm" : "am");
    };

    createTime();

 const intervalId = setInterval(() => {
      createTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card">
      <span className="time hr">{hour < 10 ? "0" + hour : hour}</span>
      <span className="dot">:</span>
      <span className="time min">{minute < 10 ? "0" + minute : minute}</span>
      <span className="dot">:</span>
      <span className="time sec">{sec < 10 ? "0" + sec : sec}</span>
      <span className="time period">{period}</span>
    </div>
  );
}

export default App;
