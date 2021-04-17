import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  function dramaticIntro(): void {
    !show && setShow(true);
  }

  return (
    <div className="App">
      <h1
        className="title"
        style={{
          transform: show ? "translateY(0)" : "translateY(-500px)",
        }}
      >
        Coin-cap
      </h1>
      <p style={{ opacity: show ? 1 : 0 }}>Coming soon</p>
      <button className="cta" onClick={dramaticIntro}>
        What's this?
      </button>
    </div>
  );
}

export default App;
