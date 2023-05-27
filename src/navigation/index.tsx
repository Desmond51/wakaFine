import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './auth.navigator';
import MainNavigator from './main.navigator';
import {Splash} from '../screens';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Splash" component={Splash} />
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="Main" component={MainNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
