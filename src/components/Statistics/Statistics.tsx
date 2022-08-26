import { Box } from '../../utils/Box';
import React, { FC } from 'react';

interface Props {
  stats: {
    good: number;
    neutral: number;
    bad: number;
  };
  total: number;
  positivePercentage: number;
}

export const Statistics: FC<Props> = ({ stats, total, positivePercentage }) => {
  const statsEntries = Object.entries(stats);
  return (
    <Box as="ul" display="flex" width="300px" justifyContent="space-evenly">
      {statsEntries.map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </Box>
  );
};
