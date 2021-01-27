import React from 'react'


class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleClickButton = type => {
        this.setState(prevState => {
            return {
                [type]: prevState[type] + 1,
            }
        })
    }
    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, item) => total += item, 0);
    }
    countPositiveFeedbackPercentage = (total, positiveFeedback) => {
        return (positiveFeedback / total * 100);
    }
    render() {
        const total = this.countTotalFeedback();
        const potitiveFeedbacks = this.countPositiveFeedbackPercentage(total, this.state.good)
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button onClick={() => this.handleClickButton('good')}>Good</button>
                <button onClick={() => this.handleClickButton('neutral')}>Neutral</button>
                <button onClick={() => this.handleClickButton('bad')}>Bad</button>
                <h1>Statistics</h1>
                <p>Good:{this.state.good}</p>
                <p>Neutral:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total:{total}</p>
                <p>Positive feedback: {total !== 0 ? potitiveFeedbacks : 0}%</p>
            </div>
        )
    }
}
export default App;