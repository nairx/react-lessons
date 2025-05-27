import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function App19() {
  const [run, setRun] = useState(1);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    setMsg("Well Done!");
  }, [run]);
  useEffect(() => {
    setMsg("Better Luck Next Time!");
  }, [wicket]);

  const incrementRun = () => {
    if (wicket < 11) {
      setRun(run + 1);
    }
  };

  const incrementWicket = () => {
    if (wicket < 10) {
      setWicket(wicket + 1);
    } else {
      setMsg("Game Over");
    }
  };

  const navToApp1 = () => {
    Navigate("/")
  }

  return (
    <div>
      <h1>App19</h1>
      <h2>Assignment</h2>
      <hr />

      <p>
        <button onClick={incrementRun}>Run:{run}</button>
      </p>
      <p>
        <button onClick={incrementWicket}>Wicket:{wicket}</button>
      </p>
      <hr />
      {msg}
      <hr />

      <p><button onClick={navToApp1}>Go to App1</button></p>

    </div>
  );
}
