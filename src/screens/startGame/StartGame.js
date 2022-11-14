import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import colors from '../../constants/colors';
import { Card, Input } from "../../components/index"

const StartGame = () => {
  const [number, setNumber] = useState("");

  const onHandleChange = (value) => {
    setNumber(value.replace(/[^0-9]/g, ''));
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>Let's start!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Select a number</Text>
          <Input 
            style={styles.input} 
            placeholder="0"
            maxLength={2}
            placeholderTextColor={colors.third}
            cursorColor={colors.third}
            keyboardType="number-pad"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onHandleChange}
            value={number}
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
      </TouchableWithoutFeedback>
  )
}

export default StartGame