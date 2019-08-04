import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  BottomNavigation,
  BottomNavigationTab
} from 'react-native-ui-kitten';
import { HomeScreen } from './src/HomeScreen'
import { Navigation } from './src/Navigation'

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
      <HomeScreen tabIndex={tabIndex}/>
      <Navigation selectedIndex={tabIndex} onSelect={setTabIndex} />
    </ApplicationProvider>
  );
};

export default App;