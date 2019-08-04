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
import HomeScreen from './src/HomeScreen'
import Navigation from './src/Navigation'
import SettingScreen from './src/SettingScreen'
import HistoryScreen from './src/HistoryScreen'

const now = new Date();
const yesterday = new Date();
yesterday.setDate(now.getDate() - 1);

const exampleItem1 = { test: true, data: 'Scanned text data ready to be sent', ts: now }
const exampleItem2 = { test: true, data: 'Another info to submit', ts: yesterday }

const App = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [server, setServer] = useState('');
  const [items, setItems] = useState([exampleItem1, exampleItem2]);
  const appendItem = (data) => {
    const newItems = items.filter(x => !x.test);
    newItems.push({data, ts: new Date()});
    setItems(newItems);
  }

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
      { tabIndex === 0 ? <HomeScreen appendItem={appendItem} /> : null }
      { tabIndex === 1 ? <HistoryScreen items={items} /> : null }
      { tabIndex === 2 ? <SettingScreen server={server} setServer={setServer} /> : null }
      <Navigation selectedIndex={tabIndex} onSelect={setTabIndex} />
    </ApplicationProvider>
  );
};

export default App;