import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import { styles } from './../styles/HomeStyle';

export default class Home extends Component {
    
    render() {
        return (
            <View style={styles.screenHome}>
                <View>
                    <Text>Advertisment</Text>
                </View>

                <Text>This is page Home! Hello React Native</Text>
            </View>
        );
    }
}

