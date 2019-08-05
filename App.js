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
} from '@lunatic-cat/react-native-ui-kitten';
import HomeScreen from './src/HomeScreen'
import Navigation from './src/Navigation'
import SettingScreen from './src/SettingScreen'
import HistoryScreen from './src/HistoryScreen'

const now = new Date();
const yesterday = new Date();
yesterday.setDate(now.getDate() - 1);

const exampleItem1 = { test: true, data: 'A thing in progress', ts: now, status: null }
const exampleItem2 = { test: true, data: 'Scanned text data ready to be sent', ts: now, status: 200 }
const exampleItem3 = { test: true, data: 'Failed submission', ts: yesterday, status: 400 }
const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [server, setServer] = useState('https://httpbin.org/status/200,500');
  const [data, setData] = useState('');
  const [items, setItems] = useState([exampleItem1, exampleItem2, exampleItem3]);
  const [modalItemIndex, setModalItemIndex] = useState(null);

  const appendItem = (item) => {
    const newItems = items.filter(x => !x.test);
    newItems.push({ ...item, ts: new Date() });
    setItems(newItems);
    return newItems.length;
  }

  const sendItem = () => {
    appendItem({ data });
    fetch(server, {
      method: 'POST',
      headers: defaultHeaders,
      body: data
    }).then(({status}) => {
      appendItem({ data, status });
    });
    setTabIndex(1);
  }

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
      {tabIndex === 0 ? <HomeScreen data={data} setData={setData} sendItem={sendItem} server={server} /> : null}
      {tabIndex === 1 ? <HistoryScreen items={items} modalItemIndex={modalItemIndex} setModalItemIndex={setModalItemIndex} /> : null}
      {tabIndex === 2 ? <SettingScreen server={server} setServer={setServer} /> : null}
      <Navigation selectedIndex={tabIndex} onSelect={setTabIndex} />
    </ApplicationProvider>
  );
};

export default App;