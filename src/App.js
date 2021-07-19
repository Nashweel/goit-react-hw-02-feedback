import React from "react";

import FeedbackOptions from "./components/Feedback";
// import Notification from "./components/Notification";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import { CONSTANS_FEEDBACK } from "./data/constans";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPostivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedbacks();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedbacks();
    const positivePercentage = this.countPostivePercentage();
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={CONSTANS_FEEDBACK}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
