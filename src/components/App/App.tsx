import React from 'react';
import { Box } from '../../utils/Box';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

type State = {
  good: number;
  neutral: number;
  bad: number;
};

export type PropertyNames = 'good' | 'neutral' | 'bad';

export class App extends React.Component<{}, State> {
  state: State = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option: PropertyNames) => {
    this.setState(
      prevState =>
        ({
          [option]: prevState[option] + 1,
        } as State)
    );
  };

  render() {
    const { onLeaveFeedback, state } = this;
    const { good } = this.state;
    const stateEntries = Object.entries(state);

    const statePropertyNames = Object.keys(state);

    const totalVotes = stateEntries.reduce((total, [, value]) => {
      return total + value;
    }, 0);

    const positiveFeedbackPercentage = Math.round((good / totalVotes) * 100);

    return (
      <main>
        <Box m={5} display="flex" flexDirection="column" alignItems="center">
          <h1>Please leave a feedback</h1>
          <FeedbackOptions
            options={statePropertyNames}
            onFeedback={onLeaveFeedback}
          />
          <h2>Statistics</h2>
          {positiveFeedbackPercentage > 0 ? (
            <>
              <Statistics
                stats={state}
                total={totalVotes}
                positivePercentage={positiveFeedbackPercentage}
              />
              <h3>
                Total votes: <span>{totalVotes}</span>
              </h3>
              <h3>
                Positive votes percentage:
                <span> {positiveFeedbackPercentage} &#x25;</span>
              </h3>
            </>
          ) : (
            <p>There's no feedback yet</p>
          )}
        </Box>
      </main>
    );
  }
}
