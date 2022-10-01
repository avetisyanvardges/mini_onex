import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

const Tracking = ({ width, height, color }) => {
  return (
    <Svg
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"
        stroke={color || Colors.placeholder}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.61 12.83V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.96c-1.14-.64-3-.64-4.14 0L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73v5.66c0 1.38.99 3.06 2.2 3.73l5.34 2.96c.57.32 1.32.48 2.07.48.75 0 1.5-.16 2.07-.48"
        stroke={color || Colors.placeholder}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM23 22l-1-1"
        stroke={color || Colors.placeholder}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export { Tracking };
