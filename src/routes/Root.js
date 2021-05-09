import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './HomeStack';
//import Test from './TestStack';
const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Home" component={Home} />
      {/*  <RootStack.Screen name="Test" component={Test} /> */}
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
