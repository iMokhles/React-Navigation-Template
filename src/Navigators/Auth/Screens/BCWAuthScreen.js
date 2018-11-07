import React, { Component } from 'react';
import Colors from "../../../Style/Themes/Colors";
import Metrics from "../../../Style/Themes/Metrics";
import Fonts from "../../../Style/Themes/Fonts";
import {
    Dimensions,
    I18nManager,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import Swiper from 'react-native-swiper';
import BCWHeaderTitle from "../../../Components/BCWHeaderTitle";
import I18n from "../../../Localization";
import BCWHeader from "../../../Components/BCWHeader";

type Props = {};
export default class BCWAuthScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    facebook = () =>
    {
        alert('Facebook');
    }

    signup = () =>
    {
        this.props.navigation.navigate('registerScreen');
    }

    login = () =>
    {
        this.props.navigation.navigate('loginScreen');

    }

    render () {
        let appLogo = {
            uri : 'https://www.imperialnissan.co.za/images/Dealership/Icons/Car-White.png'
        };
        return (
            <Content style={{backgroundColor: Colors.blacktxt}}>

                <BCWHeader>
                    <StatusBar barStyle="light-content"/>
                    <BCWHeaderTitle>{ I18n.t('login_header_title') }</BCWHeaderTitle>
                </BCWHeader>
                <View style={styles.logoSectionStyle}>
                    <Image source={appLogo} style={ styles.logoImageStyle }/>
                </View>

                <View style={styles.slideMainStyle}>
                    <View style={styles.sliderSectionStyle}>

                        <Swiper showsButtons={false}
                                autoplay={true}
                                autoplayTimeout={2.5}
                                activeDotStyle={<View style={styles.activeDotStyle} />}
                                dot={<View style={styles.dot} />}>
                            <View>
                                <Text style={styles.slideTitleStyle}>
                                    Connect and discovery our Awesome UI Kit
                                </Text>
                                <Text style={styles.slideDescriptionStyle}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.slideTitleStyle}>
                                    Connect and discovery our Awesome UI Kit
                                </Text>
                                <Text style={styles.slideDescriptionStyle}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.slideTitleStyle}>
                                    Connect and discovery our Awesome UI Kit
                                </Text>
                                <Text style={styles.slideDescriptionStyle}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </Text>
                            </View>
                        </Swiper>

                    </View>
                </View>

                <View style={styles.buttonsSectionStyle}>
                    <TouchableOpacity  info style={styles.facebookButtonStyle} onPress = {() => this.facebook()}>
                        <Text autoCapitalize="words" style={styles.facebookButtonTextStyle}>Connect with Facebook</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomSection}>
                        <TouchableOpacity  info style={styles.signButtonStyle} onPress = {() => this.signup()}>
                            <Text autoCapitalize="words"  style={styles.signButtonTextStyle}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  info style={styles.signButtonStyle} onPress = {() => this.login()}>
                            <Text autoCapitalize="words"  style={styles.signButtonTextStyle}>Login</Text>
                        </TouchableOpacity>
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
    sliderSectionStyle:{
        height: (Metrics.HEIGHT*0.30),
        backgroundColor:'transparent'
    },

    slideMainStyle:{
        height: (Metrics.HEIGHT*0.40),
        backgroundColor:'transparent',
        justifyContent: 'center'
    },
    activeDotStyle:{
        backgroundColor: 'white',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    dot:{
        backgroundColor:'#8796a6',
        width:  10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    slideTitleStyle: {
        fontFamily:Fonts.type.PlayfairDisplayBold,
        backgroundColor:'transparent',
        textAlign:'center',
        alignSelf:'center',
        fontSize:28,
        width :Metrics.WIDTH * .90,
        color:'white',
    },

    slideDescriptionStyle: {
        fontFamily: Fonts.type.Bariol,
        backgroundColor:'transparent',
        textAlign:'center',
        alignSelf:'center',
        fontSize:16,
        width :Metrics.WIDTH * .70,
        color:'white',
        marginTop:20
    },
    bottomSection:{
        width: Metrics.WIDTH * 0.80,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonsSectionStyle:{
        height: (Metrics.HEIGHT*0.30),
        backgroundColor: "rgba(255,255,255,0)",
    },
    facebookButtonStyle:{
        backgroundColor:'#3b5998',
        alignSelf:'center',
        borderRadius:40,
        width: Metrics.WIDTH *0.80,
        height: Metrics.HEIGHT * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:  Metrics.HEIGHT * 0.05
    },

    signButtonStyle:{
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:Metrics.HEIGHT * 0.03,
        borderRadius:40,
        width: Metrics.WIDTH *0.35,
        height: Metrics.HEIGHT * 0.06,
        justifyContent: 'center'
    },
    facebookButtonTextStyle: {
        fontFamily: Fonts.type.SFUIDisplayMedium,
        color:'white',
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 20
    },
    signButtonTextStyle: {
        fontFamily: Fonts.type.SFUIDisplayMedium,
        alignContent: 'center',
        color: Colors.blacktxt,
        alignSelf: 'center',
        fontSize: 20
    },
    container:{
        width:Dimensions.get('window').width,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
});