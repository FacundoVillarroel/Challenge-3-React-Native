import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';
import colors from '../../constants/colors';
import { Card } from "../../components/index"

const StartGame = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Let's start!</Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.label}>Select a number</Text>
            <TextInput 
              style={styles.input} 
              placeholder="0"
              placeholderTextColor={colors.third}
              cursorColor={colors.third}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Reset"
                onPress={() => null}
                color={colors.secondary}
                />
              <Button 
                title="Confirm"
                onPress={() => null}
                color={colors.secondary}
                />
            </View>
          </Card>
        </View>
  )
}

export default StartGame