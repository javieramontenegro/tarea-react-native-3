import React, { PureComponent } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';
import movies from '../lib/movies.json';
import { useNavigation, useRoute } from '@react-navigation/core';

// export default class Home extends PureComponent {
//   render() {
//     const { movies } = this.props;
//     return (
//       <>
//         <Header title="La Cartelera" miArray={['hola', 'chao']} />
//         <MoviesList movies={movies} />
//       </>
//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#34495e',
    flex: 1,
  },
});

const Home = ({ navigation }) => {
  //const navigation = useNavigation();
  //console.log(navigation);
  return (
    <>
      <View style={styles.container}>
        <Header title="La Cartelera" />
        <MoviesList movies={movies} />
      </View>
    </>
  );
};

export default Home;
