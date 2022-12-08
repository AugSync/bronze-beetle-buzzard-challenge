import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={12}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.771 9.957 6 13.667l-3.771-3.71a5.187 5.187 0 0 1 0-7.42c2.083-2.05 5.46-2.05 7.542 0a5.187 5.187 0 0 1 0 7.42Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 6.247c0 1.086-.895 1.967-2 1.967s-2-.88-2-1.967c0-1.087.895-1.968 2-1.968s2 .881 2 1.968Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
