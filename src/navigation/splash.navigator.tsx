import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens';

const SplashStack = createStackNavigator();
const SplashNavigator = () => {
  return (
    <SplashStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <SplashStack.Screen name="Splash" component={Splash} />
    </SplashStack.Navigator>
  );
};

export default SplashNavigator;
