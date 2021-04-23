import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../lib/colors.json';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const ChipGenre = ({ genre, pressable, onPress }) => {
  console.log(genre);
  const colorBack = {
    backgroundColor: `${colors[genre]}`,
    padding: 5,
    borderRadius: 20,
    margin: 5,
    paddingHorizontal: 10,
  };
  return (
    <>
      <TouchableOpacity
      
        disabled={!pressable}
        style={colorBack}
        onPress={() => onPress(genre)}>
        <Text style={styles.text}>{genre}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ChipGenre;
