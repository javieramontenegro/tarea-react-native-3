import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#34495e',
    flex: 1,
    padding: 10,
  },
  header: {
    width: '100%',
    height: 60,
    padding: 10,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 500,
    width: '100%',

    backgroundColor: '#34495e',
  },
  title: {
    fontSize: 35,
    padding: 10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  storyline: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
  text: {
    fontSize: 18,
    padding: 10,

    color: 'black',
  },
});
const Details = ({ route, navigation }) => {
  const { posterurl, title, storyline } = route.params;
  const navigations = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigations.pop();
          }}>
          <Icon name="arrow-left-bold" size={40} color={'white'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.image} source={{ uri: posterurl }} />
          <View style={styles.storyline}>
            <Text style={styles.text}>{storyline}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
