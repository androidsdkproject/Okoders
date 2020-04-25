import React from 'react';
import PropTypes from 'prop-types';
import {Header, Title, Text, View} from 'native-base';
import styles from './styles';
import locales from '../../utils/locales';
import StatusBar from '../StatusBar';
import Colors from '../../utils/Colors';
import {TouchableOpacity} from 'react-native';

const MyHeader = ({onPress = () => {}, title,buttonTitle}) => {
  return (
    <Header androidStatusBarColor={Colors.statusBar} style={styles.header}>
      <StatusBar />
      <View style={styles.viewContainer}>
        <View style={styles.startView}>
          <TouchableOpacity style={styles.exitView} onPress={onPress}>
            <Text style={styles.exit}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.midView}>
          <Title style={styles.title}>{title}</Title>
        </View>
        <View style={styles.endView}></View>
      </View>
    </Header>
  );
};

MyHeader.prototype = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  buttonTitle:PropTypes.string

};

MyHeader.defaultProps = {
  title: locales.home,
  buttonTitle:locales.Exit
};

export default MyHeader;
