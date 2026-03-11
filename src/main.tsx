import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HooksApp } from "./HooksApp";
import { TrafficLight } from "./useState/TrafficLight";
import { TrafficLightEffect } from "./useEffect/TrafficLightWithEffect";
import { TrafficLightEffectHook } from "./useEffect/TrafficLightWithEffectWhitHook copy";
import { PokemonPage } from "./examples/PokemonPage";
import { FocusScreen } from "./useRef/FocusScreen";
import { TasksApp } from "./useReducer/TasApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightEffectHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    <TasksApp />
  </StrictMode>,
);
