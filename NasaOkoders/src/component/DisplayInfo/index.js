import React from 'react';
import {Text, View} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import locales from '../../utils/locales';

/**
 * 
 *its takes i/p: 
 asteroidId=> to display asteroidId
 asteroidName=> to display asteroidName
 nasaJplUrl=> to display  nasaJplUrl
 isPotentiallyHazardousAsteroid=> to display isPotentiallyHazardousAsteroid
 */

const DisplayInfo = ({
  asteroidId,
  asteroidName,
  nasaJplUrl,
  isPotentiallyHazardousAsteroid,
}) => {
  console.log(asteroidName);
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.header}>{locales.asteroidId} :</Text>
        <Text style={styles.title}>{asteroidId}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.header}>{locales.asteroidName} :</Text>
        <Text style={styles.title}>{asteroidName}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.header}>{locales.nasaJplUrl} :</Text>
        <Text style={styles.title}> {nasaJplUrl}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.header}>
          {locales.isPotentiallyHazardousAsteroid} :
        </Text>
        <Text style={styles.title}> {isPotentiallyHazardousAsteroid+""}</Text>
      </View>
    </View>
  );
};

DisplayInfo.propTypes = {
  asteroidId: PropTypes.string,
  asteroidName: PropTypes.string,
  nasaJplUrl: PropTypes.string,
  isPotentiallyHazardousAsteroid: PropTypes.string,
};

DisplayInfo.defaultProps = {
  asteroidId: '',
  asteroidName: '',
  nasaJplUrl: '',
  isPotentiallyHazardousAsteroid: false,
};
export default DisplayInfo;
