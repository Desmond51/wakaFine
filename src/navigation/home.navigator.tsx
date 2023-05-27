import React from 'react';
import {Book, Bookings, Home, More, Notifications} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, IconName} from '../components';
import theme from '../utils/theme';
import {View} from 'react-native';
import styles from './home.styles';

const HomeTab = createBottomTabNavigator();
const HomeNavigator = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 90,
          paddingBottom: 0,
          backgroundColor: '#eeedf0',
        },
        headerTitleAlign: 'center',
        header: undefined,
      }}>
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={focused ? styles.focusedTab : styles.tab}>
                <Icon
                  iconName={IconName.HOME}
                  color={theme.PRIMARY}
                  size={32}
                />
              </View>
            </>
          ),
        }}
      />
      <HomeTab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={focused ? styles.focusedTab : styles.tab}>
                <Icon
                  iconName={IconName.BRIEFCASE}
                  color={theme.PRIMARY}
                  size={32}
                />
              </View>
            </>
          ),
        }}
      />
      <HomeTab.Screen
        name="Book"
        component={Book}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={focused ? styles.focusedTab : styles.tab}>
                <Icon iconName={IconName.BUS} color={theme.PRIMARY} size={32} />
              </View>
            </>
          ),
        }}
      />
      <HomeTab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={focused ? styles.focusedTab : styles.tab}>
                <Icon
                  iconName={IconName.BELL}
                  color={theme.PRIMARY}
                  size={32}
                />
              </View>
            </>
          ),
        }}
      />
      <HomeTab.Screen
        name="More"
        component={More}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={focused ? styles.focusedTab : styles.tab}>
                <Icon
                  iconName={IconName.MENU}
                  color={theme.PRIMARY}
                  size={32}
                />
              </View>
            </>
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
