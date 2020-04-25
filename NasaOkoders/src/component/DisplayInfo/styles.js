import {StyleSheet} from "react-native"
import Colors from "../../utils/Colors"
const styles=StyleSheet.create({
    header:{
        fontSize:14,
        fontWeight:"bold",
        color:Colors.white,
        textAlignVertical:"center",
        textAlign:"center"
    },
    title:{
        fontSize:12,
        fontWeight:"100",
        color:Colors.white,
        textAlignVertical:"center",
        textAlign:"center"
    },
    container:{
        backgroundColor: Colors.header,
        padding: 8,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 4,
    },
    textView:{
        flexDirection: 'row',
        padding:8
    }
})
export default styles