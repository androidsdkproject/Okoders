/**
* responsive => to make responsive application
*/
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "./responsive";
  const CommonSize = {
    headerIcon: 28,
    headerTitle: responsiveFontSize(1.6),
    normalText: responsiveFontSize(1.4),
    button:responsiveFontSize(1.6),
    inputTextHeight:50
  };
  export default CommonSize;
  