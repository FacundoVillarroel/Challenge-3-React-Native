import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Instructions = ( {instructionsList}) => {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Instructions:</Text>
          {instructionsList.map( instruction => (
            <View style={styles.instructionContainer} key={instruction.key}>
            <Text style={styles.instructionNumber}>{instruction.key}</Text>
            <Text style={styles.instruction}>{instruction.text}</Text>
          </View>
          ))}
        </View>
      </ScrollView>
    )
}

export default Instructions