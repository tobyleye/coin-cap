import { useState } from "react";
import "./App.css"

function App() {

  const [show, setShow] = useState(false);

  function dramaticIntro() {
    !show && setShow(true)
  }

  return (
    <div className="App">
      <h1 style={{
        transition: 'transform .55s cubic-bezier(.6,-0.1,.2,1.37)',
        fontSize: 50,
        marginBottom: 10,
        transform: show ? 'translateY(0)' : 'translateY(-500px)'
      }}>Coin-cap</h1>
      <p style={{ fontStyle: 'italic', opacity: show ? 1 : 0, transition: 'opacity .45s ease 1s'}}>Coming soon</p>
      <button className="cta" onClick={dramaticIntro}>What's this?</button>
    </div>
  );
}

export default App;
