import * as React from 'react';
import { StyleSheet, ListRenderItemInfo } from 'react-native';
import { Button, Layout, Text, List, ListItem } from 'react-native-ui-kitten';

const HomeScreen = (props = {}) => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h1'>Home{props.tabIndex}</Text>
    <Button onPress={e => props.appendItem('123')}>Append</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 16,
  },
});

export default HomeScreen;