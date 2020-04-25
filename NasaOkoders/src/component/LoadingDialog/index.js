import React from "react";
import locales from "../../utils/locales";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./styles";
const LoadingDialog = ({ loading }) => {
  return (
    <Spinner
      visible={loading}
      textContent={locales.loadingMessage}
      textStyle={styles.text}
      cancelable={true}
      animation={"fade"}
      size={"large"}
    />
  );
};

export default LoadingDialog;
