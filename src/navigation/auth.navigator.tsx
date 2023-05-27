import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Onboarding, SignUp, Verification} from '../screens';

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Signup" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Verification" component={Verification} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
