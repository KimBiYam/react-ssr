import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrementClick = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={handleIncrementClick}>
        +
      </button>
      <button type="button" onClick={handleDecrementClick}>
        -
      </button>
    </div>
  );
}

export default Home;
