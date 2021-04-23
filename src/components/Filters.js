import React from 'react';
import { View, StyleSheet } from 'react-native';
//import Chip from './Chip'
import ChipGenre from './ChipGenre';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const Filters = ({ moviesGenres, onPress }) => {
  const genresChip = moviesGenres.map((genre, index) => (
    <ChipGenre
      pressable
      onPress={onPress}
      key={`genres-${index}`}
      genre={genre}
    />
  ));

  return <View style={styles.container}>{genresChip}</View>;
};

export default Filters;
