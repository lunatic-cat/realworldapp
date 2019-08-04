import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export const HomeScreen = (props = {}) => (
    <Layout style={styles.container}>
      <Text style={styles.text} category='h1'>Tab#{props.tabIndex}</Text>
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
