import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, TopicsScreen } from '../screens';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="TopicsScreen" component={TopicsScreen} />
    </Stack.Navigator>
  );
};
