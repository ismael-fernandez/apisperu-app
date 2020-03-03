import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import Empty from '../components/empty';
import { ListItem } from 'react-native-elements'

class DocumentList extends Component {
    RendeEmpty = () => <Empty text="The list is empty :(" />
    itemSeparator = () => "--"
    ViewMovie = (item) => {
        
    }
    renderItem = ({ item }) => {
        console.log(item)
    }
    keyExtractor = item => item.key.toString()
    render() {
        return (            
            this.props.list.map((l, i) => (
                <ListItem
                    key={i}
                    title={l.name}
                    subtitle={l.value}
                    bottomDivider
                />
            ))
        );
    }
}

export default DocumentList;