import React, { Component } from 'react';
import { Animated } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator, createStackNavigator, TabBarBottom } from 'react-navigation';
import BCWHomeScreen from "./Screens/Home/BCWHomeScreen";
import BCWNotificationsScreen from "./Screens/Notifications/BCWNotificationsScreen";
import BCWSettingsScreen from "./Screens/Settings/BCWSettingsScreen";

import Fonts from '../../../src/Style/Themes/Fonts'
import Metrics from '../../../src/Style/Themes/Metrics'
import Colors from '../../../src/Style/Themes/Colors'

const homeStack = createStackNavigator({
    homeScreen: BCWHomeScreen,
}, {
    headerMode: 'none',
});

const notificationsStack = createStackNavigator({
    notificationsScreen: BCWNotificationsScreen
}, {
    headerMode: 'none',
});

const settingsStack = createStackNavigator({
    messagesScreen: BCWSettingsScreen
}, {
    headerMode: 'none',
});

export default (BCWTabController = createBottomTabNavigator(
    {
        Home: {
            screen: homeStack,
            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => {
                    let tabName = I18n.t('home_header_title');
                    return <Text style={{fontSize: Fonts.size.small, marginBottom: 1.5, color: tintColor}}>{tabName}</Text>
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconName = `md-home`;
                    return <Icon name={iconName} size={Fonts.size.h4} style={{color:tintColor, marginTop: 3.5}} />
                }
            }
        },
        Notifications: {
            screen: notificationsStack,
            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => {
                    let tabName = I18n.t('notifications_header_title');
                    return <Text style={{fontSize: Fonts.size.small, marginBottom: 1.5, color: tintColor}}>{tabName}</Text>
                },
                tabBarIcon: ({focused, tintColor}) => {
                    let iconName = `md-notifications${focused ? '' : '-outline'}`;
                    return <Icon name={iconName} size={Fonts.size.h4} style={{color:tintColor, marginTop: 3.5}} />
                }
            }
        },
        Settings: {
            screen: settingsStack,
            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => {
                    let tabName = I18n.t('settings_header_title');
                    return <Text style={{fontSize: Fonts.size.small, marginBottom: 1.5, color: tintColor}}>{tabName}</Text>
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconName = `md-settings`;
                    return <Icon name={iconName} size={Fonts.size.h4} style={{color:tintColor, marginTop: 3.5}} />
                }
            }
        },
    },
    {
        initialRouteName: 'Notifications',
        order: [ 'Home', 'Notifications', 'Settings'],
        tabBarOptions: {
            activeTintColor: Colors.blacktxt,
            inactiveTintColor: Colors.shadows,
        }
    },
));