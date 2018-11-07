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
        let BG_logo = {
            uri : 'https://www.imperialnissan.co.za/images/Dealership/Icons/Car-White.png'
        };
        return (
            <Content style={{backgroundColor: Colors.blacktxt}}>

                <BCWHeader>
                    <StatusBar barStyle="light-content"/>
                    <BCWHeaderTitle>{ I18n.t('login_header_title') }</BCWHeaderTitle>
                </BCWHeader>
                <View style={styles.logosec}>
                    {/*<TouchableOpacity style={styles.backarrow} onPress={()=>this.props.navigation.navigate('SignUp')}>*/}
                        {/*<Icon type="FontAwesome" name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" />*/}
                    {/*</TouchableOpacity>*/}
                    <Image source={BG_logo} style={ styles.logo14 }/>
                </View>

                <View style={styles.slidemain}>
                    <View style={styles.slidersec}>

                        <Swiper showsButtons={false}
                                autoplay={true}
                                autoplayTimeout={2.5}
                                activeDot={<View style={styles.activeDot} />}
                                dot={<View style={styles.dot} />}>
                            <View style={styles.slide1}>
                                <Text style={styles.headertext}>
                                    Connect and discovery our Awesome UI Kit
                                </Text>
                                <Text style={styles.desctext}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </Text>
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.headertext}>
                                    Connect and discovery our Awesome UI Kit
                                </Text>
                                <Text style={styles.desctext}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.headertext}>
                                    Connect and discovery our Awesome UI Kit
                                </Text>
                                <Text style={styles.desctext}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </Text>
                            </View>
                        </Swiper>

                    </View>
                </View>

                <View style={styles.btnsec}>
                    <TouchableOpacity  info style={styles.buttonlogin} onPress = {() => this.facebook()}>
                        <Text autoCapitalize="words" style={styles.loginbutton}>Connect with Facebook</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomsec}>
                        <TouchableOpacity  info style={styles.buttonsignup01} onPress = {() => this.signup()}>
                            <Text autoCapitalize="words"  style={styles.signupbutton}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  info style={styles.buttonsignup01} onPress = {() => this.login()}>
                            <Text autoCapitalize="words"  style={styles.signupbutton}>Login</Text>
                        </TouchableOpacity>
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
    slidersec:{
        height: (Metrics.HEIGHT*0.30),
        backgroundColor:'transparent'
    },

    slidemain:{
        height: (Metrics.HEIGHT*0.40),
        backgroundColor:'transparent',
        justifyContent: 'center'
    },
    activeDot:{
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
    headertext: {
        fontFamily:Fonts.type.PlayfairDisplayBold,
        backgroundColor:'transparent',
        textAlign:'center',
        alignSelf:'center',
        fontSize:28,
        width :Metrics.WIDTH * .90,
        color:'white',
    },

    desctext: {
        fontFamily: Fonts.type.Bariol,
        backgroundColor:'transparent',
        textAlign:'center',
        alignSelf:'center',
        fontSize:16,
        width :Metrics.WIDTH * .70,
        color:'white',
        marginTop:20
    },
    bottomsec:{
        width: Metrics.WIDTH * 0.80,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnsec:{
        height: (Metrics.HEIGHT*0.30),
        backgroundColor: "rgba(255,255,255,0)",
    },
    buttonlogin:{
        backgroundColor:'#3b5998',
        alignSelf:'center',
        borderRadius:40,
        width: Metrics.WIDTH *0.80,
        height: Metrics.HEIGHT * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:  Metrics.HEIGHT * 0.05
    },

    buttonsignup01:{
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
    loginbutton: {
        fontFamily: Fonts.type.SFUIDisplayMedium,
        color:'white',
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 20
    },
    signupbutton: {
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