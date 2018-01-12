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
        console.log(this.props)
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
                    <TouchableOpacity onPress={() => {
                        if (this.props.navigation.state.index === 0) {
                            this.props.navigation.navigate('DrawerOpen');
                        } else {
                            this.props.navigation.navigate('DrawerClose');
                        }
                    }}>
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

        Home: { screen: Home },
        Email: { screen: Email },
        History: { screen: History },
        UserMenu: { screen: UserMenu },
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

const Drawer = DrawerNavigator(
    {
        Tab: { screen: Tab },

        Welcome: { screen: Welcome },
        Home: { screen: Home },
        Email: { screen: Email },
        History: { screen: History },
        UserMenu: { screen: UserMenu },
    },
    {
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerPosition: 'right',

    }
);

const Navigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
    },
    {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            header: <HeaderView navigation={navigation} />,
        }),
    }

);

export default Navigator;
