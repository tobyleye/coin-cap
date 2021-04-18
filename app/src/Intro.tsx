import { useState } from "react"

function Intro() {
  const [show, setShow] = useState(false);

  function dramaticIntro(): void {
    !show && setShow(true);
  }

  return (
    <div>
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
  )
}

export { Intro }