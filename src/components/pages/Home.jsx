import React, { useState, useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("January 25, 2024 00:00:00").getTime();
      const today = new Date().getTime();

      const timeDiff = endDate - today;

      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;

      let timeDays = Math.floor(timeDiff / days);
      let timeHours = Math.floor((timeDiff % days) / hours);
      let timeMinutes = Math.floor((timeDiff % hours) / minutes);
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

      setDays(timeDays);
      setHours(timeHours);
      setMinutes(timeMinutes);
      setSeconds(timeSeconds);
    };

    setInterval(countdown, 1000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 overflow-auto">
      <div>
        <h1 className="text-8xl font-bold text-red-600">AmongUs</h1>
      </div>
      <div className="text-4xl sm:text-6xl">MIT Exclusive Hackathon!</div>
      <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
        <div className="flex flex-col border-2 rounded-md p-1">
          <span className="countdown font-mono text-3xl sm:text-5xl">
            <span style={{ "--value": days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col border-2 rounded-md p-1">
          <span className="countdown font-mono text-3xl sm:text-5xl">
            <span style={{ "--value": hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col border-2 rounded-md p-1">
          <span className="countdown font-mono text-3xl sm:text-5xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col border-2 rounded-md p-1">
          <span className="countdown font-mono text-3xl sm:text-5xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};
