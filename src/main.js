import React, { Component } from 'react'

import {
    View,
    Text,
} from 'react-native';
import { Button, ThemeProvider, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/screens/containers/home'
class App extends Component {
    render() {
        return (
            <Home>
                <ThemeProvider>
                    <Input
                        placeholder='INPUT WITH CUSTOM ICON'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Button
                        title="Loading button"
                        loading
                    />
                </ThemeProvider>
            </Home>
        );
    }
}

export default App;