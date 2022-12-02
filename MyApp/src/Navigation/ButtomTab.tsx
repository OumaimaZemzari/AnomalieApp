import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {Favoris} from '../pages/Favoris/Favoris';
import {Home} from '../pages/Home/Home';
const Tab = createMaterialBottomTabNavigator();

export const ButtomBar: FunctionComponent = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favoris" component={Favoris} />
    </Tab.Navigator>
  </NavigationContainer>
);
