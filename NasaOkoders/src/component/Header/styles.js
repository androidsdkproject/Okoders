import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import CommonSize from '../../utils/CommonSize';
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: CommonSize.headerTitle,
    fontWeight: 'bold',
    color: Colors.headerTitle,
  },
  header: {
    backgroundColor: Colors.header,
  },

  exitView: {
    borderRadius: 4,
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  exit: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  stopRestartView: {
    borderRadius: 4,
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 120,
  },
  stopRestart: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },

  startView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },

  midView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  endView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
export default styles;
