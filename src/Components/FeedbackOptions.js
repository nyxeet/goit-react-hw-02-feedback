import react from 'react'

const FeedbackOptions = ({ handleClickButton }) => (
    <>
        <button onClick={() => handleClickButton('good')}>Good</button>
        <button onClick={() => handleClickButton('neutral')}>Neutral</button>
        <button onClick={() => handleClickButton('bad')}>Bad</button>
    </>
)

export default FeedbackOptions;