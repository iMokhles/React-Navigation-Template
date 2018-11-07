import React, { Component } from 'react';
import { ActivityIndicator, Alert, Text, View, Image, StatusBar, Platform, ImageBackground ,TouchableOpacity, StyleSheet, I18nManager} from 'react-native';
import { Fonts, Metrics, Colors, Images } from '../../Style/Themes';

import BCWCurrentUser from "../../Services/BCWCurrentUser";
import BCWHeader from "../../Components/BCWHeader";

type Props = {};
export default class BCWLaunchScreen extends Component<Props> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        BCWCurrentUser.isLoggedIn()
            .then(isLoggedIn => {
                this.props.navigation.navigate(isLoggedIn ? 'App' : 'Auth')
            })
    }

    render () {
        let ic_logo = { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Circle-icons-piechart.svg/1024px-Circle-icons-piechart.svg.png' };

        return (
            <Container style={{backgroundColor: '#002C85'}}>
                <BCWHeader>
                    <StatusBar barStyle="light-content"/>
                    <BCWHeaderTitle/>
                </BCWHeader>

                <View style={styles.logosec}>
                    <Image source={ic_logo} style={styles.logostyle}/>
                </View>

                <View style={styles.container}>
                    <ActivityIndicator size="large"/>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logosec:{
        width: Metrics.WIDTH,
        height: Metrics.WIDTH * 0.30,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logostyle: {
        alignSelf:'center',
        width: 200,
        height: Metrics.WIDTH * 0.20,
    },

});