import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../lib/colors.json';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'grey',
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
});

const Chip = ({ value, pressable, onPress }) => {
  const colorBack = { backgroundColor: `${colors[value]}` };
  console.log(value);
  return (
    <>
      <TouchableOpacity
        disabled={!pressable}
        style={styles.container}
        onPress={() => onPress(value)}>
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Chip;
