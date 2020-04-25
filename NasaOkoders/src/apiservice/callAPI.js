import axios from 'axios';
import {showLog} from '../utils/Logs';
/**
 * 
 * @param {*} asteroidId 
 */
export const getAsteroidInfoById = async (asteroidId) => {
  try {
    const response = axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/neo/' +
          asteroidId +
          '?api_key=9sIhNWvEelN9sFoIqmZKC3utmkc4t2fP4j4cjxzZ',
      )
      .then((res) => {
        showLog('res ' + JSON.stringify(res));
        return res.data;
      })
      .catch((e) => {
        showLog('e ' + JSON.stringify(e));
        return '';
      });
    return response;
  } catch (error) {
    showLog('error ' + JSON.stringify(error));
    return '';
  }
};
/**
 * this function used to generate Asteroid random id
 */
export const getForRandomAsteroidId = async () => {
  try {
    const response = axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=9sIhNWvEelN9sFoIqmZKC3utmkc4t2fP4j4cjxzZ',
      )
      .then((res) => {
        //   showLog('res ' + JSON.stringify(res));
        return res.data;
      })
      .catch((e) => {
        showLog('e ' + JSON.stringify(e));
        return '';
      });
    return response;
  } catch (error) {
    showLog('error ' + JSON.stringify(error));
    return '';
  }
};

//
