import React, { FC } from 'react';
import { PropertyNames } from '../App/App';
import { Box } from '../../utils/Box';

interface Props {
  options: string[];
  onFeedback: (option: PropertyNames) => void;
}

export const FeedbackOptions: FC<Props> = ({ options, onFeedback }) => {
  return (
    <Box as="ul" display="flex" width={400} justifyContent="space-evenly">
      {options.map(option => (
        <Box as="li" key={option}>
          <button
            type="button"
            onClick={() => onFeedback(option as PropertyNames)}>
            {option}
          </button>
        </Box>
      ))}
    </Box>
  );
};
