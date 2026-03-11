import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightState = keyof typeof colors;

export const useTrafficLight = (
  color: TrafficLightState = "red",
  number = 5,
) => {
  const [light, setLight] = useState<TrafficLightState>(color);
  const [countdown, setCountdown] = useState<number>(number);

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

  return { light, countdown, colors };
};
