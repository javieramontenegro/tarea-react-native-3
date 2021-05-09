import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestNavigations from '../screens/Test';
import Home from '../screens/Home';
const TestStack = createStackNavigator();

const TestNavigation = () => (
  <TestStack.Navigator headerMode="none">
    {/*  <TestStack.Screen name="Test" component={TestNavigations} /> */}
    <TestStack.Screen name="Home" component={Home} />
  </TestStack.Navigator>
);

export default TestNavigation;
