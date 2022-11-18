import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Header } from "./components/index";
import { StartGame, Game } from "./screens/index"
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content =  <StartGame onStartGame={onStartGame} />

  if (userNumber) {
    content = <Game selectedNumber={userNumber} />
  }


  return (
    <View style={styles.container}>
      <Header title={"Welcome"}/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}