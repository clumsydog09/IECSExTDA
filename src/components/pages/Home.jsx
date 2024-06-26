import React, { useState, useEffect } from "react";
import "../../index.css";

export const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("April 10, 2024 18:00:00").getTime();
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 flex-grow">
      <div>
        <h1 className="text-8xl font-bold bg-gradient-to-t from-red-900 to-red-500 text-transparent bg-clip-text mb-16 ">
          AmongUs
        </h1>
      </div>
      <div className="text-4xl sm:text-6xl mb-4">MIT Exclusive Hackathon!</div>
      <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
        <div className="flex flex-col border-2 rounded-md p-2">
          <span className="countdown font-mono text-3xl sm:text-5xl">
            <span style={{ "--value": days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col border-2 rounded-md p-2">
          <span className="countdown font-mono text-3xl sm:text-5xl">
            <span style={{ "--value": hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col border-2 rounded-md p-2">
          <span className="countdown font-mono text-3xl sm:text-5xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col border-2 rounded-md p-2">
          <span className="countdown font-mono text-3xl sm:text-5xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          sec
        </div>
      </div>
      <a
        href="https://forms.gle/93Ds4BzzUzXk6B7o8"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-16 transition-opacity duration-300 hover:opacity-60 active:bg-gray-400 inline-block px-4 py-2 border-2 border-white text-3xl text-white font-semibold rounded-md"
      >
        register now!!!
      </a>
    </div>
  );
};
