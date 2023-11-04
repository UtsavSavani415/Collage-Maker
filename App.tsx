import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootNavigator} from './src/components/navbar/Navbar';
import DashBoard from './src/components/dashboard/DashBoard';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // console.log('====================================');
  // console.log(Colors);
  // console.log('====================================');

  return (
    <NavigationContainer>
      <DashBoard />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
