import React, { Component } from 'react';
import { Game, Home } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class SimplePastApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Game'
            component={Game}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              header: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
