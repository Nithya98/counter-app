import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1> Counter App using State </h1>
      </header>
      <h2> Current value of the count is {count} </h2>
      <button onClick={() => setCount(0)}> Reset Counter </button>
      <button onClick={() => count >= 10 ? "" : setCount(count + 1)}> Increase counter </button>
      <button onClick={() => count <= 0 ? " " : setCount(count - 1)}> Decrease counter </button>
    </div>
  )
}

export default App;