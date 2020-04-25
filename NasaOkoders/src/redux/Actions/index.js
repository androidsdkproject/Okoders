import Constants from '../../utils/Constants';
import {getAsteroidInfoById,getForRandomAsteroidId} from '../../apiservice/callAPI';
import Toast from 'react-native-root-toast';
import locales from '../../utils/locales';
export const changeAsteroidId = (value) => {
  return {
    type: Constants.CHANGE_ASTEROID_ID,
    payload: value,
  };
};

export const showLoading = () => {
  return {
    type: Constants.SHOW_LOADING,
    payload: '',
  };
};

export const hideLoading = () => {
  return {
    type: Constants.HIDE_LOADING,
    payload: '',
  };
};

export const callAPIForAsteroidInfo = (id) => {
  return (dispatch) => {
    dispatch(showLoading());
    getAsteroidInfoById(id).then((data) => {
      if (data != undefined && data.name != undefined) {
        Toast.show(locales.successMsg);
        dispatch(successDataAsteroidInfo(data));
      } else {
        Toast.show(locales.errorMsg);
        dispatch(errorDataAsteroidInfo(data));
      }
    });
  };
};
export const callAPIForRandomAsteroidId = () => {
  return (dispatch) => {
    dispatch(showLoading());
    getForRandomAsteroidId().then((data) => {
      if (data != undefined && data.links != undefined) {
        let list = [];
        list = data.near_earth_objects;
        const min = 1;
        const max = 19;
        const rand = min + Math.random() * (max - min);
        Toast.show(locales.successMsg);
        dispatch(successDataAsteroidRandom(list[parseInt(rand)]));
      } else {
        Toast.show(locales.errorMsg);
        dispatch(errorDataAsteroidRandom(data));
      }
    });
  };
};

export const successDataAsteroidInfo = (data) => {
  return {
    type: Constants.INFO_API_SUCCESS,
    asteroidName: data.name,
    nasaJplUrl: data.nasa_jpl_url,
    isPotentiallyHazardousAsteroid: data.is_potentially_hazardous_asteroid,
    asteroidId:data.id
  };
};

export const errorDataAsteroidInfo = () => {
  return {
    type: Constants.INFO_API_ERROR,
    payload: '',
  };
};

export const successDataAsteroidRandom = (data) => {
  return {
    type: Constants.RANDOM_API_SUCCESS,
    asteroidName: data.name,
    nasaJplUrl: data.nasa_jpl_url,
    isPotentiallyHazardousAsteroid: data.is_potentially_hazardous_asteroid,
    asteroidId:data.id
  };
};

export const errorDataAsteroidRandom = () => {
  return {
    type: Constants.RANDOM_API_ERROR,
    payload: '',
  };
};

export const handleBackForInfo = () => {
  return {
    type: Constants.BACK_BUTTON_FOR_INFO,
    payload: '',
  };
};
