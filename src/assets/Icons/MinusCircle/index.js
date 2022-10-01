import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

const MinusCircle = ({ width, height, color }) => {
  return (
    <Svg
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.92 22c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM7.92 12h8"
        stroke={color || Colors.placeholder}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export { MinusCircle };
