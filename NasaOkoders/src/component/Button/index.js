import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
/**
 * 
 *its takes i/p: 
 buttonText=> for button text
 buttonColor=> for button color
 textColor=> for text color
 disabled=> to disable button
 */
const Button = ({
  buttonText,
  buttonColor,
  textColor,
  onPress = () => {},
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[{backgroundColor: buttonColor}, styles.buttonStyle]}
      onPress={onPress}>
      <Text style={[{color: textColor}, styles.buttonTextStyle]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  buttonText: 'Submit',
  buttonColor: 'black',
  textColor: 'white',
  disabled: false,
};
export default Button;
