import CommonSize from "../../utils/CommonSize";
import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: CommonSize.normalText,
    backgroundColor:Colors.header,
    height:40,
    color:Colors.white,
    marginLeft:10,
    marginRight:10,
    padding:5,
    borderRadius:4
  }
});
export default styles;
