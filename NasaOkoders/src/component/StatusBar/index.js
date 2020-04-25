import React from "react";
import { StatusBar } from "react-native";
import Colors from "../../utils/Colors";
const statusBar = ({}) => {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor={Colors.statusBar}
    />
  );
};
statusBar.propTypes = {};
statusBar.defaultProps = {};
export default statusBar;
