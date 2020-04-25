import {Container, View, Text} from 'native-base';
import React from 'react';
import {connect} from 'react-redux';
import Header from '../../component/Header';
import locales from '../../utils/locales';
import {Alert} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import InputText from '../../component/InputText';
import Button from '../../component/Button';
import Colors from '../../utils/Colors';
import {
  changeAsteroidId,
  callAPIForAsteroidInfo,
  handleBackForInfo,
  callAPIForRandomAsteroidId,
} from '../../redux/Actions';
import LoadingDialog from '../../component/LoadingDialog';
import DisplayInfo from '../../component/DisplayInfo';
class AsteroidForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isShowingAsteroidInfo} = this.props;
    return (
      <Container>
        <LoadingDialog loading={this.props.loading} />
        <Header
          title={
            isShowingAsteroidInfo
              ? locales.asteroidInformation
              : locales.enterAsteroidID
          }
          buttonTitle={isShowingAsteroidInfo ? locales.back : locales.Exit}
          onPress={() => {
            if (isShowingAsteroidInfo) {
              this.props.handleBackForInfo();
            } else {
              Alert.alert(
                'Exit',
                'Are you sure want to exit from application?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      RNExitApp.exitApp();
                    },
                  },
                ],
              );
            }
          }}
        />
        {isShowingAsteroidInfo ? (
          <View style={{flex: 1, marginTop: 20}}>
            <DisplayInfo
              asteroidId={this.props.asteroidId}
              asteroidName={this.props.asteroidName}
              nasaJplUrl={this.props.nasaJplUrl}
              isPotentiallyHazardousAsteroid={
                this.props.isPotentiallyHazardousAsteroid
              }
            />
          </View>
        ) : (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <InputText
              placeholderText={locales.enterAsteroidID}
              handleInputs={(value) => {
                this.props.changeAsteroidId(value);
              }}
            />

            <Button
              buttonColor={Colors.green}
              buttonText={locales.submit}
              textColor={Colors.white}
              onPress={() => {
                this.props.callAPIForAsteroidInfo(this.props.asteroidId);
              }}
              disabled={this.props.asteroidId === '' ? true : false}
            />
            <Button
              buttonColor={Colors.green}
              buttonText={locales.randomAsteroid}
              textColor={Colors.white}
              onPress={() => {
                this.props.callAPIForRandomAsteroidId();
              }}
            />
          </View>
        )}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    asteroidId: state.asteroidForm.asteroidId,
    loading: state.asteroidForm.loading,
    isShowingAsteroidInfo: state.asteroidForm.isShowingAsteroidInfo,
    asteroidName: state.asteroidForm.asteroidName,
    nasaJplUrl: state.asteroidForm.nasaJplUrl,
    isPotentiallyHazardousAsteroid:
      state.asteroidForm.isPotentiallyHazardousAsteroid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAsteroidId: (value) => {
      dispatch(changeAsteroidId(value));
    },
    callAPIForAsteroidInfo: (value) => {
      dispatch(callAPIForAsteroidInfo(value));
    },
    handleBackForInfo: (value) => {
      dispatch(handleBackForInfo(value));
    },
    callAPIForRandomAsteroidId: () => {
      dispatch(callAPIForRandomAsteroidId());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsteroidForm);
