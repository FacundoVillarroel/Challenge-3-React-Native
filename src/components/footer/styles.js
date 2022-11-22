import { StyleSheet } from "react-native";
import colors from "../../constants/colors"

export const styles = StyleSheet.create({
  container:{
    height:100,
    backgroundColor:colors.primary,
    alignItems:"center",
    justifyContent:"center"
  },
  touchable:{
    height:"50%",
    justifyContent:"center",
    backgroundColor:colors.third,
    borderRadius:10,
    padding:10,
  },
  text:{
    alignItems:"center"
  },
})