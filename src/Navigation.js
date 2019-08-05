import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@lunatic-cat/react-native-ui-kitten';
import { CropOutline, ListOutline, SettingsOutline } from '../src/icons';

const Navigation = (props) => (
  <BottomNavigation
    selectedIndex={props.selectedIndex}
    onSelect={props.onSelect}>

    <BottomNavigationTab title='Scan' icon={CropOutline} />
    <BottomNavigationTab title='History' icon={ListOutline} />
    <BottomNavigationTab title='Settings' icon={SettingsOutline} />
  </BottomNavigation>
);

export default Navigation;