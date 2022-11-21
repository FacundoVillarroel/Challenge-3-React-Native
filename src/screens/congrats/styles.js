import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


export const styles = StyleSheet.create({
  congratsContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  congratsTitle:{
      fontSize:15,
      color:colors.third,
      fontFamily:"JosefinSans-Italic"
  },
  content: {
    width: '70%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resetButtonContainer:{
    marginTop:20
  }
})