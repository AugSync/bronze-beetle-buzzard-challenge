import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.313.875A3.743 3.743 0 0 0 6.5 2.181 3.743 3.743 0 0 0 3.687.875 3.404 3.404 0 0 0 .25 4.313c0 2.362 2.125 4.287 5.344 7.212l.906.819.906-.825C10.625 8.6 12.75 6.675 12.75 4.312A3.404 3.404 0 0 0 9.312.876Zm-2.75 9.719-.063.062-.063-.062C3.462 7.9 1.5 6.119 1.5 4.313c0-1.25.938-2.188 2.188-2.188.962 0 1.9.619 2.23 1.475h1.17c.324-.856 1.262-1.475 2.224-1.475 1.25 0 2.188.938 2.188 2.188 0 1.806-1.963 3.587-4.938 6.28Z"
      fill="#A2D1B1"
    />
  </Svg>
);

export default SvgComponent;