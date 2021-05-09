import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 300,
    width: '100%',
    backgroundColor: '#34495e',
  },
});

const MovieCardImage = ({
  validImage,
  posterurl,
  title,
  storyline,
  onError = () => {},
  onLoadEnd = () => {},
  onLongPress = () => {},
}) => {
  // puede ir código
  /* console.log(navigation); */
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onLongPress={onLongPress}
      onPress={() => {
        navigation.navigate('Details', {
          posterurl: posterurl,
          title: title,
          storyline: storyline,
        });
      }}
      underlayColor="transparent">
      <Image
        style={styles.image}
        source={
          validImage
            ? { uri: posterurl }
            : require('../../assets/no_image_available.jpg')
        }
        onError={onError}
        onLoadEnd={onLoadEnd}
      />
    </TouchableHighlight>
  );
};

export default MovieCardImage;
