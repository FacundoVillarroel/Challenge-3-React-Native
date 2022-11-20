import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { Card, NumberContainer } from '../../components';
import colors from '../../constants/colors';
import { styles } from './styles';

const generateRandomNumber = (min, max, exclude) => {
  min=Math.ceil(min);
  max=Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if(randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let attempts = 0

const Game = ({selectedNumber, onResetGame}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100, selectedNumber));
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  

  const onLower = () => {
    attempts++
    const newRandom = generateRandomNumber(min, currentGuess, null)
    if (newRandom < selectedNumber){ setMin(newRandom) }
    setCurrentGuess(newRandom)
  }

  const onGreater = () => {
    attempts++
    const newRandom = generateRandomNumber(currentGuess, max, null)
    if (newRandom > selectedNumber) {setMax(newRandom)}
    setCurrentGuess(newRandom)
  }

  const handleRestart = () => {
    attempts = 0
    onResetGame()
  }

  if(selectedNumber === currentGuess) {
    return (
      <View style={styles.congratsContainer}>
        <Card style={styles.content}> 
          <Text style={styles.congratsTitle}>Congratulations !!</Text>
          <Text style={styles.congratsTitle}>You won with {attempts} attempts !</Text>
        </Card>
        <View style={styles.resetButtonContainer}>
        <Button
          title='Restart Game'
          onPress={handleRestart}
          color={colors.primary}
        />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Opponent's Number</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.containerButton}>
          <Button
            title="lower" 
            onPress={onLower} 
            color={colors.secondary}
          />
          <Button
            title="greater"
            onPress={onGreater} 
            color={colors.primary}
          />
        </View>
      </Card>
      <View style={styles.resetButtonContainer}>
        <Button
          title='Restart Game'
          onPress={handleRestart}
          color={colors.primary}
        />
      </View>
    </View>
  )
}

export default Game