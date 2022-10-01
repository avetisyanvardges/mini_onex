import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

const SearchIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 20a9 9 0 100-18 9 9 0 000 18zM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97z"
        stroke={color || Colors.placeholder}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export { SearchIcon };
