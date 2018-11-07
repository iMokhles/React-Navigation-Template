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
export default class BCWRegisterScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
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
        let BG_logo = {
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
                    <BCWHeaderTitle>{ I18n.t('register_header_title') }</BCWHeaderTitle>
                    <Right/>
                </BCWHeader>
                <View style={styles.logosec}>
                    <Image source={BG_logo} style={ styles.logo14 }/>
                </View>

                <View>
                    <View>
                        <Form style={styles.form}>
                            <Item rounded style={styles.inputStyle}>
                                <Input
                                    placeholderTextColor="#ffffff"
                                    textAlign={I18nManager.isRTL ? "right" : "left"}
                                    placeholder="Username"
                                    style={styles.inputmain}
                                />
                            </Item>
                            <Item rounded style={[styles.inputStyle, { marginTop: 10 }]}>
                                <Input
                                    placeholderTextColor="#ffffff"
                                    placeholder="Email"
                                    textAlign={I18nManager.isRTL ? "right" : "left"}
                                    style={styles.inputmain}
                                />
                            </Item>
                            <Item rounded style={[styles.inputStyle, { marginTop: 10 }]}>
                                <Input
                                    placeholderTextColor="#ffffff"
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    textAlign={I18nManager.isRTL ? "right" : "left"}
                                    style={styles.inputmain}
                                />
                            </Item>
                            <Item rounded style={[styles.inputStyle, { marginTop: 10 }]}>
                                <Input
                                    placeholderTextColor="#ffffff"
                                    placeholder="Password Confirmation"
                                    secureTextEntry={true}
                                    textAlign={I18nManager.isRTL ? "right" : "left"}
                                    style={styles.inputmain}
                                />
                            </Item>

                            <TouchableOpacity
                                info
                                style={styles.signInbtn}
                                onPress={() => this.login()}
                            >
                                <Text autoCapitalize="words" style={styles.buttongetstarted}>
                                    Sign Up
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
    logosec:{
        height: (Metrics.HEIGHT*0.20),
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo14:{
        height: (Metrics.HEIGHT*0.15),
        width:  (Metrics.WIDTH*0.35),
        marginTop: 10,
    },
    backarrow:{
        left:0,
        top:0,
        width: 30,
        position: 'absolute',
        marginTop: 20,
        marginLeft: 20
    },
    form: {
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT * 0.45,
        backgroundColor: "rgba(255,255,255,0)",
        borderColor: "transparent",
        justifyContent: "center",
        alignSelf: "center"
    },
    inputStyle: {
        borderColor: "transparent",
        justifyContent: "center",
        alignSelf: "center",
        width: Metrics.WIDTH * 0.8
    },
    inputmain: {
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
    signInbtn: {
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
    buttongetstarted: {
        fontFamily: Fonts.type.SFUIDisplayMedium,
        color: Colors.blacktxt,
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
    },
    buttongettext: {
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: Fonts.type.SFUIDisplayMedium,
        color: Colors.snow,
        marginTop: 15
    },
});