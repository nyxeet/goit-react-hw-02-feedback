import React from 'react';

const FeedbackOptions = ({ options, handleClickButton }) => (
  <>
    {options.map(elem => (
      <button key={elem} onClick={() => handleClickButton(elem)}>
        {elem}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
