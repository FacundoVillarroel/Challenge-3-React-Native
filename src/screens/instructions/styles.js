import { StyleSheet } from "react-native";
import colors from "../../constants/colors"

export const styles = StyleSheet.create({
  scrollView:{
    flex:1
  },
  container:{
    flex:1,
    alignItems:"flex-start",
  },
  title:{
    fontSize:20,
    fontFamily:"JosefinSans-Regular",
    marginVertical:15,
    alignSelf:"center",
    color:colors.third
  },
  instructionContainer:{
    flexDirection:"row",

  },
  instruction:{
    fontSize:15,
    color:colors.text,
    margin:10,
    width:"90%"
  },
  instructionNumber:{
    fontSize:15,
    color:colors.text,
    marginTop:10,
    marginLeft:10
  },
})