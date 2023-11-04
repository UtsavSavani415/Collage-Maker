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
  SAVEDSCREEN = 'SavedScreen',
}
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Home = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen component={DashBoard} name={Routes.HOME} />
    <Stack.Screen component={DashBoard} name={Routes.COLLAGE} />
  </Stack.Navigator>
);

export default function Navbar() {
  return (
    <Tab.Navigator initialRouteName={Routes.HOME}>
      <Tab.Screen name={Routes.HOME} component={Home} />
      <Tab.Screen name={Routes.SAVEDSCREEN} component={SavedScreen} />
    </Tab.Navigator>
  );
}

export const RootNavigator = () => {
  console.log('====================================');
  console.log('in navbar component');
  console.log('====================================');
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
