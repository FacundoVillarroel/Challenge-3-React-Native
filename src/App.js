import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Header } from "./components/index";
import { StartGame, Game } from "./screens/index"
import { styles } from './styles';
import { useFonts } from "expo-font"; 
import colors from './constants/colors';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  })

  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const onResetGame =() => {
    setUserNumber(null)
  }

  const title = userNumber ? "Let's Play" : 'Welcome';

  let content =  <StartGame onStartGame={onStartGame} />

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


  return (
    <View style={styles.container}>
      <Header title={title}/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}