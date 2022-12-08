import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={13}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6.25 11.469-.906-.825C2.125 7.725 0 5.8 0 3.437A3.404 3.404 0 0 1 3.438 0c1.087 0 2.13.506 2.812 1.306A3.743 3.743 0 0 1 9.063 0 3.404 3.404 0 0 1 12.5 3.438c0 2.362-2.125 4.287-5.344 7.212l-.906.819Z"
      fill="#A2D1B1"
    />
  </Svg>
);

export default SvgComponent;
