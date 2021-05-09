/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
//import Home from './screens/Home';
//import movies from './lib/movies.json';
import RootNavigation from './routes/Root';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {/* <Home /> */}
      <RootNavigation />
    </>
  );
};

export default App;
