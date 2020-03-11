import React, { Component } from 'react';

import Empty from '../components/empty';
import { ListItem } from 'react-native-elements'
import { List } from 'react-native-paper';

import { connect } from 'react-redux'
import { StyleSheet, ScrollView  } from 'react-native';

function mapSateteToProps(state) {
    return {
        list: state.docslist
    }
}

class DocumentList extends Component {
    RendeEmpty = () => <Empty text="The list is empty :(" />
    keyExtractor = item => item.key.toString()
    render() {
        return (
            <ScrollView style={styles.scroll}>
                {this.props.list.map((l, i) => (
                    <List.Item
                        key={i}
                        title={l.name + ":"}
                        description={l.value ? l.value : '-'}
                        descriptionNumberOfLines={5}
                    />
                ))}
            </ScrollView >
        );
    }
}
const styles= StyleSheet.create({
    scroll:{
        width:'100%',
    }
})

export default connect(mapSateteToProps)(DocumentList);