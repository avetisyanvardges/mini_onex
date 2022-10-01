import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

const TickCircle = ({ width, height, color }) => {
  return (
    <Svg
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"
        stroke={color || Colors.placeholder}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.75 12l2.83 2.83 5.67-5.66"
        stroke={color || Colors.placeholder}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export { TickCircle };
