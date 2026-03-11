import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightEffectHook = () => {
  const { light, countdown, colors } = useTrafficLight("green", 3);

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
