import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div testID='component-counter'>
      <h1 testID='counter-display'>
        The counter is currently&nbsp;
        <span testID='count'>{count}</span>
      </h1>
      <button
        testID='increment-button'
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
    </div>
  );
};

export default Counter;
