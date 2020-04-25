import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {TextInput} from "react-native"
import Colors from '../../utils/Colors';
const InputText = ({
  inputTextStyle,
  placeholderText,
  handleInputs = () => {},
}) => (
    <TextInput
      style={[styles.textInputStyle, inputTextStyle]}
      underlineColorAndroid="transparent"
      placeholder={placeholderText}
      placeholderTextColor={Colors.white}
      multiline={false}
      onChangeText={handleInputs}
      keyboardType={"decimal-pad"}
    />
);

InputText.propTypes = {
    inputTextStyle: PropTypes.string,
    placeholderText: PropTypes.string,
};

InputText.defaultProps = {
    inputTextStyle: {},
    placeholderText: "",
};

export default InputText;
