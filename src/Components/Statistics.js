import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>
      Positive feedback: {total !== 0 ? Math.floor(positivePercentage) : 0}%
    </p>
  </>
);

export default Statistics;
