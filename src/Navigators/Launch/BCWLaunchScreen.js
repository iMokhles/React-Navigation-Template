import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet} from 'react-native';
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
                this.props.navigation.navigate(isLoggedIn ? 'Tab' : 'Auth')
            })
    }

    render () {
        return (
            <Container style={{backgroundColor: Colors.blacktxt}}>
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={Colors.whites}/>
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