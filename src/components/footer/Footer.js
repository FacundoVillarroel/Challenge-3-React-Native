import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {styles} from "./styles"

const Footer = ({onInstructions, footerText}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onInstructions}>
        <Text style={styles.text}>{ footerText }</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer