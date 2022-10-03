import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

function CloseIcon({ width, height, color }) {
  return (
    <Svg
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <G data-name="Layer 2">
        <Path
          fill={color || Colors.black}
          d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
          data-name="close"
        />
      </G>
    </Svg>
  );
}

export default CloseIcon;
