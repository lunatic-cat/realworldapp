import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, List, ListItem, Modal } from '@lunatic-cat/react-native-ui-kitten';
import { ArrowUpOutline, ChackmarkOutline, CloseCircleOutline } from '../src/icons';

const statusIcon = (status) => {
    if (!status) return ArrowUpOutline;
    if (status >= 300) return CloseCircleOutline;
    return ChackmarkOutline;
}

const modal = ({ items, modalItemIndex, setModalItemIndex }) => {
    console.log('modalItemIndex', modalItemIndex)
    return (
        <Modal
            visible={(modalItemIndex !== null) && items[modalItemIndex]}
            allowBackdrop={true}
            backdropStyle={styles.modalBackdrop}
            onBackdropPress={e => setModalItemIndex(null)}>
            <View style={styles.modal}>
                <Text style={styles.modalText} category='h5'>Server: {(items[modalItemIndex] || {}).status || '...'}</Text>
                <Button onPress={() => setModalItemIndex(null)}>Close</Button>
            </View>
        </Modal>
    )
}

const HistoryScreen = (props = {}) => {
    console.log('modal', props);
    const renderItem = ({ item, index, separators }) => {
        const { highlight, _unhighlight, _updateProps } = separators;
        return (<ListItem
            style={styles.item}
            title={item.data}
            icon={statusIcon(item.status)}
            description={item.ts ? item.ts.toLocaleDateString() : '?'}
            onPress={e => { highlight(); (props.items[index] && props.items[index].status) ? props.setModalItemIndex(index) : null} }
        />);
    };

    return (
        <Layout style={styles.container}>
            <Text style={styles.text} category='h1'>History</Text>
            <Layout style={styles.subcontainer}>
                {modal(props)}
                <List
                    data={props.items}
                    renderItem={renderItem}
                />
            </Layout>
        </Layout>
    );
}

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
    },
    modal: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    modalBackdrop: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    modalText: {
        marginBottom: 10,
    }
});

export default HistoryScreen;