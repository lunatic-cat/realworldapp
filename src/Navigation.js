import React from 'react';
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten';
import { CropOutline, ListOutline, SettingsOutline } from '../src/icons';

export const Navigation = (props) => (
  <BottomNavigation
    selectedIndex={props.selectedIndex}
    onSelect={props.onSelect}>

    <BottomNavigationTab title='Scan' icon={CropOutline} />
    <BottomNavigationTab title='History' icon={ListOutline} />
    <BottomNavigationTab title='Settings' icon={SettingsOutline} />
  </BottomNavigation>
);