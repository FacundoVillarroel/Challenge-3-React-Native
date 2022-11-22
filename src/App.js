import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Footer, Header } from "./components/index";
import { StartGame, Game, Instructions } from "./screens/index"
import { styles } from './styles';
import { useFonts } from "expo-font"; 
import colors from './constants/colors';
import instructionsList from './utils/instructionsList';

export default function App() {
  const [loaded] = useFonts({
    'JosefinSans-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
    'JosefinSans-Bold': require('../assets/fonts/JosefinSans-Bold.ttf'),
    'JosefinSans-Italic': require('../assets/fonts/JosefinSans-Italic.ttf'),
  })

  const [userNumber, setUserNumber] = useState(null);
  const [instructions, setInstructions] = useState(false)

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const onResetGame =() => {
    setUserNumber(null)
  }

  const onInstructions = () => {
    setInstructions(!instructions)
  }

  const title = userNumber ? "Let's Play" : 'Welcome';

  let content =  <StartGame onStartGame={onStartGame} />
  let footerText = "See instructions of the game"

  if (!loaded) {
    return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
    )
  }

  if (userNumber) {
    content = <Game selectedNumber={userNumber} onResetGame={onResetGame} />
  }

  if (instructions){
    content = <Instructions instructionsList={instructionsList}/>
    footerText='Return to the game'
  }

  return (
    <View style={styles.container}>
      <Header title={title}/>
      {content}
      <Footer onInstructions={onInstructions} footerText={footerText}/>
      <StatusBar style="auto" />
    </View>
  );
}