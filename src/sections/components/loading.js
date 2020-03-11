import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    ActivityIndicator
} from 'react-native'

function Loading(props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ActivityIndicator size="large" color="#0984e3" />                
            </View>
            <View style={styles.bottom}>
                <Text>from</Text>
                <Text style={styles.text}>TECH</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        height:'80%',        
        justifyContent: 'center',        
    },
    bottom:{
        justifyContent:'center',
        height:'20%',
    },
    text: {
        color: '#0984e3',
        fontWeight: 'bold',
    },
    logo: {
        marginBottom: 10,
        width: 300,
        height: 80,
        resizeMode: 'contain',
    }
})

export default Loading;