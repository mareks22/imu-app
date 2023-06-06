import { useState } from "react";
import "./App.css";
import ThreeScene from "./components/Manual";
import ImuMovement from "./components/Imu";

function App() {
  const [moveType, setMoveType] = useState<"manual" | "imu">("manual");
  return (
    <div className="wrapper">
      <h1 className="title">SERIES 2</h1>
      <div className="btns">
        <button
          className={`button ${moveType === "manual" ? 'selected' : ''}`}
          onClick={() => setMoveType("manual")}
        >
          Manually
        </button>
        <button
          className={`button ${moveType === "imu" ? 'selected' : ''}`}
          onClick={() => setMoveType("imu")}
        >
          IMU
        </button>
      </div>
      {moveType === "manual" ? (
        <ThreeScene></ThreeScene>
      ) : (
        <ImuMovement></ImuMovement>
      )}
    </div>
  );
}

export default App;
