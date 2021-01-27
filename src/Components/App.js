import React from 'react'
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'


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
        const positiveFeedbacks = this.countPositiveFeedbackPercentage(total, this.state.good)
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions handleClickButton={this.handleClickButton} ></FeedbackOptions>
                </Section>
                <Section title="Statistics">
                    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positiveFeedbacks}/>
                </Section> 
            </div>
        )
    }
}
export default App;