import Constants from '../../utils/Constants';
const iState = {
  asteroidId: '',
  asteroidName: '',
  nasaJplUrl: '',
  isPotentiallyHazardousAsteroid: true,
  loading: false,
  isShowingAsteroidInfo:false
};
const asteroidForm = (state = iState, action) => {
  switch (action.type) {
    case Constants.CHANGE_ASTEROID_ID:
      return {
        ...state,
        asteroidId: action.payload,
      };
    case Constants.INIT_ASTEROID_INFO:
      return {
        ...state,
        asteroidName: '',
        nasaJplUrl: '',
        isPotentiallyHazardousAsteroid: true,
        asteroidId: '',
      };
    case Constants.INFO_API_SUCCESS:
      return {
        ...state,
        asteroidName: action.asteroidName,
        asteroidId:action.asteroidId,
        nasaJplUrl: action.nasaJplUrl,
        isPotentiallyHazardousAsteroid: action.isPotentiallyHazardousAsteroid,
        loading: false,
        isShowingAsteroidInfo:true
      };
    case Constants.INFO_API_ERROR:
      return {
        ...state,
        asteroidName: '',
        nasaJplUrl: '',
        isPotentiallyHazardousAsteroid: false,
        loading: false,
        isShowingAsteroidInfo:false
      };
      case Constants.RANDOM_API_SUCCESS:
        return {
          ...state,
          asteroidId:action.asteroidId,
          asteroidName: action.asteroidName,
          nasaJplUrl: action.nasaJplUrl,
          isPotentiallyHazardousAsteroid: action.isPotentiallyHazardousAsteroid,
          loading: false,
          isShowingAsteroidInfo:true
        };
      case Constants.RANDOM_API_ERROR:
        return {
          ...state,
          asteroidName: '',
          nasaJplUrl: '',
          isPotentiallyHazardousAsteroid: false,
          loading: false,
          isShowingAsteroidInfo:false
        };
    case Constants.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Constants.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
      case Constants.BACK_BUTTON_FOR_INFO:
      return {
        ...state,
        asteroidId:'',
        asteroidName: '',
        nasaJplUrl: '',
        isPotentiallyHazardousAsteroid: true,
        loading: false,
        isShowingAsteroidInfo:false
      };
    default:
      return state;
  }
};

export default asteroidForm;
