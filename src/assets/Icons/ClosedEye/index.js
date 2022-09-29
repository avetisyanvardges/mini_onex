import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors, Sizes } from 'assets/RootStyles';

const ClosedEyeIcon = ({ width, height, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || Sizes(24)}
      height={height || Sizes(24)}
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512">
      <Path
        d="M500.862 225.775c-29.621-34.367-64.949-66.624-102.388-91.029l83.309-83.309c5.86-5.859 5.86-15.361 0-21.22-5.859-5.859-15.361-5.859-21.22 0l-88.729 88.729C332.624 97.974 293.799 87.362 256 87.362c-94.311 0-183.452 67.163-244.862 138.413-14.85 17.231-14.85 43.218 0 60.449 29.621 34.367 64.949 66.624 102.388 91.029l-83.309 83.309c-5.86 5.859-5.86 15.361 0 21.22 5.861 5.861 15.361 5.86 21.22 0l88.729-88.729c39.21 20.972 78.034 31.584 115.833 31.584 94.311 0 183.452-67.163 244.862-138.413 14.852-17.23 14.852-43.218.001-60.449zM33.87 266.631c-5.309-6.16-5.309-15.103 0-21.263C67.039 206.884 155.083 117.373 256 117.373c33.052 0 64.723 9.603 93.538 23.869l-41.153 41.153c-14.787-10.554-32.873-16.771-52.385-16.771-49.833 0-90.376 40.543-90.376 90.376 0 19.511 6.216 37.597 16.77 52.385l-47.12 47.12c-46.296-28.99-82.636-67.098-101.404-88.874zM316.365 256c0 33.285-27.08 60.365-60.365 60.365a59.983 59.983 0 01-30.716-8.428l41.326-41.326 41.326-41.326A59.968 59.968 0 01316.365 256zm-120.73 0c0-33.285 27.08-60.365 60.365-60.365a59.974 59.974 0 0130.716 8.429L245.39 245.39l-41.326 41.326A59.974 59.974 0 01195.635 256zm282.495 10.631C444.961 305.116 356.917 394.627 256 394.627c-33.052 0-64.723-9.603-93.538-23.869l41.153-41.153c14.787 10.554 32.873 16.771 52.385 16.771 49.833 0 90.376-40.543 90.376-90.376 0-19.511-6.216-37.597-16.771-52.385l47.12-47.12c46.296 28.99 82.636 67.098 101.404 88.873 5.31 6.16 5.31 15.103.001 21.263z"
        fill={color || Colors.placeholder}
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
    </Svg>
  );
};
export { ClosedEyeIcon };