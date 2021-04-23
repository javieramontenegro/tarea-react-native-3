import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = StyleSheet.create({
      text: {
        color: 'blue',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
      },
      textDetails: {
        fontSize: 15,
        color: 'black',
        fontStyle: 'italic',
      },
    });
    const { storyline, onPress, showDetails } = this.props;
    return (
      <>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>Ver descripcion</Text>
        </TouchableOpacity>
        {showDetails && <Text style={styles.textDetails}>{storyline}</Text>}

        <View></View>
      </>
    );
  }
}
