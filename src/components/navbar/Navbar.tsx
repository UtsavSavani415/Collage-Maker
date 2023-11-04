import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/HomeScreen';
import SavedScreen from '../../screens/saved/SavedScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from '../dashboard/DashBoard';

export enum Routes {
  ROOT = 'root',
  HOME = 'Home',
  COLLAGE = 'collage',
  SAVEDSCREEN = 'Saved',
}
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#666',
        // tabBarActiveBackgroundColor: '#c4461c',
        // tabBarInactiveBackgroundColor: '#b55031',
        tabBarStyle: {
          height: 90,
          paddingTop: 0,
          backgroundColor: 'rgba(34,36,40,1)',
          position: 'absolute',
          borderTopWidth: 0,
        },
      }}
      backBehavior="history">
      <Tab.Screen name={Routes.HOME} component={DashBoard} />
      <Tab.Screen name={Routes.SAVEDSCREEN} component={SavedScreen} />
    </Tab.Navigator>
  );
}

export const RootNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.ROOT}
          component={Navbar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.COLLAGE}
          component={HomeScreen}
          options={{
            presentation: 'card',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};
