import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Navigator from './Routers/config';

class App extends Component {
    render() {
        return (
            <View style={styles.App}>
                <StatusBar hidden={true} />
                <Navigator />

            </View>
        );
    }
}
export default App;

const styles = StyleSheet.create({
    
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
    }

});