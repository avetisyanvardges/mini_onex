import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

const SunIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        stroke={color || Colors.placeholder}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.14 19.14l-.13-.13m0-14.02l.13-.13-.13.13zM4.86 19.14l.13-.13-.13.13zM12 2.08V2v.08zM12 22v-.08.08zM2.08 12H2h.08zM22 12h-.08.08zM4.99 4.99l-.13-.13.13.13z"
        stroke={color || Colors.placeholder}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export { SunIcon };
