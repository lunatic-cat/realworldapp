import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button, Layout, Text, Input } from '@lunatic-cat/react-native-ui-kitten';

const SettingScreen = (props = {}) => (
    <Layout style={styles.container}>
        <Text style={styles.text} category='h1'>Settings</Text>
        <Layout style={styles.subcontainer}>
        <Input
            value={props.server}
            onChangeText={props.setServer}
            label='Server'
            caption='the scanned payload will be sent to this url'
            placeholder='https://...'
        />
        </Layout>
    </Layout>
);

const styles = StyleSheet.create({
    subcontainer: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        margin: 20,
    },
    text: {
        marginVertical: 16,
    },
});

export default SettingScreen;