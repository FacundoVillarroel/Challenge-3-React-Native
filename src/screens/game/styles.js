import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    content: {
        width: '70%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 16,
        color:colors.text
    },
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    congratsContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    congratsTitle:{
        fontSize:15,
        color:colors.third,
        fontFamily:"Lato-Italic"
    },
    resetButtonContainer:{
        marginTop:20
    }
});