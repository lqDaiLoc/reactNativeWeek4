import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ConpleteScreen from '../screens/ConpleteScreen';
import AllScreen from '../screens/AllScreen';
import ActiveScreen from '../screens/ActiveScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ConpleteStack = createStackNavigator(
  {
    Conplete: ConpleteScreen,
  },
  config
);

ConpleteStack.navigationOptions = {
  tabBarLabel: 'Conplete',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkmark-circle${focused ? '' : '-outline'}`
          : 'ios-checkmark-circle-outline'
      }
    />
  ),
};

ConpleteStack.path = '';

const AllStack = createStackNavigator(
  {
    All: AllScreen,
    TodoDetail : TodoDetailScreen,
  },
  config
);

AllStack.navigationOptions = {
  tabBarLabel: 'All',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle' : 'ios-add-circle-outline'} />
),
};
AllStack.path =  '';
const ActiveStack = createStackNavigator(
  {
    Active: ActiveScreen,
  },
  config
);

ActiveStack.navigationOptions = {
  tabBarLabel: 'Active',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ActiveStack.path = '';

const tabNavigator = createBottomTabNavigator({
  AllStack,
  ConpleteStack,
  ActiveStack,
});

tabNavigator.path = '';

export default tabNavigator;
