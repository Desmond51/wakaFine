import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './home.navigator';


const MainStack = createStackNavigator();
const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="HomeNavigator" component={HomeNavigator} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
