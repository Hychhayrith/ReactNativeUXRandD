import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native-elements';

import {HomeScreen, Animation, FloatingButton} from '../Screens';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'React Native UI & UX',
      },
    },
    Animation: {
      screen: Animation,
      navigationOptions: {
        title: 'Animation',
      },
    },
    FloatingButton: {
      screen: FloatingButton,
      navigationOptions: {
        title: 'Floating Button',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ecf0f1',
      },
    },
  },
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      'UI & UX': HomeStack,
      Firebase: HomeStack,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;

          if (routeName === 'UI & UX') {
            iconName = `https://res.cloudinary.com/dd8plasfr/image/upload/v1575793384/RNRandDAppImage/browser_1_dmluyw.png`;
          } else if (routeName === 'Firebase') {
            iconName = `https://res.cloudinary.com/dd8plasfr/image/upload/v1575793384/RNRandDAppImage/browser_1_dmluyw.png`;
          }

          return (
            <Image source={{uri: iconName}} style={{width: 28, height: 28}} />
          );
        },
      }),
      tabBarOptions: {
        activeTintColor: '#2980b9',
        inactiveTintColor: '#2c3e50',
        style: {
          backgroundColor: '#ecf0f1',
        },
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
      },
    },
  ),
);
