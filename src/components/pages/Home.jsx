import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div>
        <h1 className="text-8xl">AmongUs</h1>
      </div>
      <div className="text-6xl">MIT Exclusive Hackathon!</div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 42 }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};
