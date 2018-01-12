import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar, Image } from 'react-native';

import { styles } from './../styles/welcome';

export default class Welcome extends Component {
    render() {
       
        return (
            <View style={styles.creenWelcome}>
                <StatusBar hidden={true} />

                <View style={styles.BoxSlider}>
                    <View>
                        <Text style={styles.FontSize}>Welcome</Text>
                    </View>

                    <View style={styles.slider}>
                        <TouchableOpacity><Text> Prev </Text></TouchableOpacity>
                        <View style={styles.sliderItem}>
                            <Text>Slider or gif images</Text>
                        </View>
                        <TouchableOpacity><Text> Next </Text></TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Home')}
                        >
                            <Text style={styles.buttonText}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={styles.Footer}>
                    <Text style={styles.FooterText}>Website | Privacy | Terms | About Us</Text>
                    <Text style={styles.FooterText}>Copyright@DTC</Text>
                </View>

            </View>
        );
    }
}

