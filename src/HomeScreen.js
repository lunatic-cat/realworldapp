import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Layout, Text, List, ListItem } from '@lunatic-cat/react-native-ui-kitten';
import QRCodeScanner from 'react-native-qrcode-scanner';

const buttonLabel = ({ data, server }) => {
  if (!server) return 'Set server in settings';
  if (!data.length) return 'Scan code';
  return `Send "${data}"`;
}

const buttonEnabled = ({ data, server }) => {
  return server && data.length;
}

const HomeScreen = (props = {}) => (
  <Layout style={styles.container}>
    <QRCodeScanner
      ref={(node) => { this.scanner = node; }}
      containerStyle={styles.scannerContainer}
      cameraStyle={styles.scanner}
      onRead={props.setData}
    />
    <Layout style={styles.bottomRow}>
      <Button style={styles.sendBtn}
        disabled={!buttonEnabled(props)}
        onPress={e => props.sendItem()}>{buttonLabel(props)}</Button>
    </Layout>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: 'transparent',
  },
  sendBtn: {
    flex: 1,
    width: '90%',
    paddingVertical: 20,
  },
  scanner: {
    flex: 1,
  },
  scannerContainer: {
    flex: 1,
  }
});

export default HomeScreen;