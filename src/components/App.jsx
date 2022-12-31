import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(count + 1);
  }

  function decr() {
    count > 0 ? setCount(count - 1) : null;
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decr}>-</button>
      <button onClick={incr}>+</button>
    </div>
  );
}

export default App;
