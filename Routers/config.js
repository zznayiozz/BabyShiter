import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';

import Welcome from './../Components/welcome';
import Home from './../Components/Home';
import UserMenu from './../Components/UserMenu';
import History from './../Components/History';
import Email from './../Components/Email';

class HeaderView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Search Shitter...'
        };
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={{ marginRight: 30 }} source={require('./../images/logo.png')} />
                </TouchableOpacity>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        paddingLeft: 10,
                        paddingRight: 10,
                        color: '#ccc',
                        width: 150
                    }}
                    placeholder={this.state.text}
                    onChangeText={(text) => this.setState({ text })}

                />
            </View>
        )
    }
}

class FooterTabs extends Component {
    render() {
        return (
            <View style={{ flex: .1, backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('./../images/home.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Email')}>
                        <Image source={require('./../images/email.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                        <Image source={require('./../images/history.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserMenu')}>
                        <Image source={require('./../images/user.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )

    };
}


const Tab = TabNavigator(
    {
        Welcome: { screen: Welcome },
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image source={require('./../images/home.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        },
        Email: {
            screen: Email,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image source={require('./../images/email.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        },
        History: {
            screen: History,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image source={require('./../images/history.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        },
        UserMenu: {
            screen: UserMenu,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image source={require('./../images/user.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        },

    }, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: '#e91e63',
            inactiveTintColor: 'black',
            pressOpacity: 1,

        },
        tabBarComponent: props => <FooterTabs {...props} />,

    }
);


const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
    },
    {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            header: <HeaderView navigation={navigation} />,
        }),
    }

);

export default Navigator;

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});