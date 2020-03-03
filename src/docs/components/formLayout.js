import React from 'react';
import { StyleSheet, View } from 'react-native'
function formLayout(props) {
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: '#fff',
            flex: props.flex ? 1 : 0,
        }
    })
    return (
        <View style={styles.bg}>
            {props.children}
        </View>
    );
}
export default formLayout;


