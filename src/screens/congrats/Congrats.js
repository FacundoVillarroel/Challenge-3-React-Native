import { View, Text, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';
import colors from '../../constants/colors';
import { Card } from '../../components';

const Congrats = ({attempts, handleRestart, currentGuess}) => {
  return (
    <View style={styles.congratsContainer}>
        <Card style={styles.content}> 
          <Text style={styles.congratsTitle}>Congratulations !!</Text>
          <Text style={styles.congratsTitle}>The chosen number was: {currentGuess}</Text>
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

export default Congrats