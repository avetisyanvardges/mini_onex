import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

const ArrowBottom = ({ width, height, color }) => {
  return (
    <Svg
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <G data-name="24x24/On Light/Arrow-Bottom" transform="rotate(-90 12 12)">
        <Path fill="none" d="M0 0H24V24H0z" />
        <Path
          d="M.22 10.22a.75.75 0 001.06 1.06l5-5a.75.75 0 000-1.061l-5-5A.75.75 0 00.22 1.28l4.47 4.47z"
          transform="rotate(180 7.375 8.875)"
          fill={color || Colors.black}
        />
      </G>
    </Svg>
  );
};

export { ArrowBottom };
