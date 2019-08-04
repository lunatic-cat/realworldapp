import * as React from 'react';
import { StyleSheet, ListRenderItemInfo } from 'react-native';
import { Button, Layout, Text, List, ListItem } from 'react-native-ui-kitten';
import { StarOutline } from '../src/icons';


const renderItem = (props = {}) => {
    const {item, index, separators} = props;
    const { highlight, unhighlight, updateProps } = separators;
    return (<ListItem
        style={styles.item}
        title={item.data}
        icon={StarOutline}
        description={item.ts ? item.ts.toLocaleDateString() : '?'}
        onPress={e => highlight()}
    />);
};

const HistoryScreen = (props = {}) => (
    <Layout style={styles.container}>
        <Text style={styles.text} category='h1'>History</Text>
        <Layout style={styles.subcontainer}>
            <List
                data={props.items}
                renderItem={renderItem}
            />
        </Layout>
    </Layout>
);

const styles = StyleSheet.create({
    subcontainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        margin: 20,
    },
    text: {
        marginVertical: 16,
    },
    item: {
        flex: 1,
    }
});

export default HistoryScreen;