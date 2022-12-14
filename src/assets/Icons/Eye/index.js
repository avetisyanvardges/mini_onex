import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

const EyeIcon = ({ width, height, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 511.9995 511"
      enableBackground="new 0 0 512 512">
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M510.066 171.918C467.25 81.778 369.891.5 256 .5 127.852.5 35.738 100.746 1.934 171.918a20.012 20.012 0 000 17.164C44.75 279.222 142.109 360.5 256 360.5c128.148 0 220.262-100.25 254.066-171.418a20.012 20.012 0 000-17.164zM256 320.5c-92.14 0-168.535-60.723-213.348-140C87.277 101.547 163.625 40.5 256 40.5c92.133 0 168.535 60.715 213.348 140-44.625 78.95-120.973 140-213.348 140zm0-240c-55.14 0-100 44.86-100 100s44.86 100 100 100 100-44.86 100-100-44.86-100-100-100zm0 160c-33.082 0-60-26.918-60-60 0-33.086 26.918-60 60-60 33.086 0 60 26.914 60 60 0 33.082-26.914 60-60 60zm0 0"
        fill={color || Colors.placeholder}
        data-original="#000000"
      />
    </Svg>
  );
};
export { EyeIcon };
