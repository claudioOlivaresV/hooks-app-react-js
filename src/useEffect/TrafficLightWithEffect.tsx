import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

// type TrafficLightState = "red" | "yellow" | "green";

type TrafficLightState = keyof typeof colors;

export const TrafficLightEffect = () => {
  const [light, setLight] = useState<TrafficLightState>("red");
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    if (countdown === 0) return;
    console.log(light);
    console.log(countdown);
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, light]);

  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === "red") {
      setLight("green");
    } else if (light === "yellow") {
      setLight("red");
    } else if (light === "green") {
      setLight("yellow");
    }
  }, [countdown, light]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">
          Semaforo con useEffect
        </h1>
        <h2 className="text-white text-xl">{countdown}</h2>
        <div
          className={`w-32 h-32 ${light === "red" ? colors.red : "bg-gray-500"} rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${light === "yellow" ? colors.yellow : "bg-gray-500"} rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${light === "green" ? colors.green : "bg-gray-500"} rounded-full`}
        ></div>
      </div>
    </div>
  );
};
