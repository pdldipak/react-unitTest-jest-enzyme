import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div testID='component-counter'>
      <h1 testID='counter-display'>
        The counter is currently&nbsp;
        <span testID='counter-display-start'>{count}</span>
      </h1>
      {error && (
        <h2 style={{ color: 'red' }} testID='error-message'>
          The counter cant go below 0
        </h2>
      )}
      <button
        testID='increment-button'
        onClick={() => {
          error && setError(false);
          setCount(count + 1);
        }}
      >
        Increment counter
      </button>
      &nbsp;
      <button
        testID='decrement-button'
        onClick={() => {
          return count > 0 ? setCount(count - 1) : setError(true);
        }}
      >
        Decrement counter
      </button>
    </div>
  );
};

export default Counter;
