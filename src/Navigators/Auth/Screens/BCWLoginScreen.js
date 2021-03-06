import React, { Component } from 'react';
import Colors from "../../../Style/Themes/Colors";
import Metrics from "../../../Style/Themes/Metrics";
import Fonts from "../../../Style/Themes/Fonts";
import {
    I18nManager,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import BCWHeaderTitle from "../../../Components/BCWHeaderTitle";
import I18n from "../../../Localization";
import BCWHeader from "../../../Components/BCWHeader";
import {Form, Input, Item} from "native-base";

type Props = {};
export default class BCWLoginScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    popScreen = () =>
    {
        this.props.navigation.pop();
    }

    login = () =>
    {
        alert('Login');
    }

    forgotPassword = () =>
    {
        alert('Forgot Password');
    }

    render () {
        let appLogo = {
            uri : 'https://www.imperialnissan.co.za/images/Dealership/Icons/Car-White.png'
        };
        return (
            <Content style={{backgroundColor: Colors.blacktxt}}>

                <BCWHeader>
                    <Left>
                        <Button transparent onPress = {() => this.popScreen()}>
                            <Icon name='arrow-back' style={{color:Colors.shadows}} />
                        </Button>
                    </Left>
                    <StatusBar barStyle="light-content"/>
                    <BCWHeaderTitle>{ I18n.t('login_header_title') }</BCWHeaderTitle>
                    <Right/>
                </BCWHeader>
                <View style={styles.logoSectionStyle}>
                    <Image source={appLogo} style={ styles.logoImageStyle }/>
                </View>

                <View>
                    <View>
                        <Form style={styles.form}>
                            <Item rounded style={styles.itemStyle}>
                                <Input
                                    placeholderTextColor="#ffffff"
                                    textAlign="left"
                                    placeholder="Email"
                                    style={styles.inputStyle}
                                />
                            </Item>
                            <Item rounded style={[styles.itemStyle, { marginTop: 10 }]}>
                                <Input
                                    placeholderTextColor="#ffffff"
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    textAlign="left"
                                    style={styles.inputStyle}
                                />
                            </Item>
                            <TouchableOpacity onPress={() => this.forgotPassword()}>
                                <Text autoCapitalize="words" style={styles.forgotPasswordTextStyle}>
                                    Forgot your password?
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                info
                                style={styles.signInButtonStyle}
                                onPress={() => this.login()}
                            >
                                <Text autoCapitalize="words" style={styles.signInButtonTextStyle}>
                                    Sign In
                                </Text>
                            </TouchableOpacity>
                        </Form>
                    </View>
                </View>

            </Content>
        );
    }
}

const styles = StyleSheet.create({
    logoSectionStyle:{
        height: (Metrics.HEIGHT*0.20),
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImageStyle:{
        height: (Metrics.HEIGHT*0.15),
        width:  (Metrics.WIDTH*0.35),
        marginTop: 10,
    },
    form: {
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT * 0.45,
        backgroundColor: "rgba(255,255,255,0)",
        borderColor: "transparent",
        justifyContent: "center",
        alignSelf: "center"
    },
    itemStyle: {
        borderColor: "transparent",
        justifyContent: "center",
        alignSelf: "center",
        width: Metrics.WIDTH * 0.8
    },
    inputStyle: {
        fontFamily: Fonts.type.PlayfairDisplayBold,
        color: Colors.snow,
        justifyContent: "center",
        alignSelf: "center",
        paddingTop: 12,
        paddingBottom: 10,
        paddingLeft: 20,
        borderRadius: 40,
        width: Metrics.WIDTH * 0.8,
        backgroundColor: "rgba(255,255,255,0.4)"
    },
    signInButtonStyle: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor:'white',
        alignSelf:'center',
        // marginTop:Metrics.HEIGHT * 0.03,
        borderRadius:40,
        width: Metrics.WIDTH *0.35,
        height: Metrics.HEIGHT * 0.06,
        justifyContent: 'center',
        marginTop: 25
    },
    signInButtonTextStyle: {
        fontFamily: Fonts.type.SFUIDisplayMedium,
        color: Colors.blacktxt,
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
    },
    forgotPasswordTextStyle: {
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: Fonts.type.SFUIDisplayMedium,
        color: Colors.snow,
        marginTop: 15
    },
});