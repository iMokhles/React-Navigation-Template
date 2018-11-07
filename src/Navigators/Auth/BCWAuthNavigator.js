import { createStackNavigator } from 'react-navigation';
import BCWLoginScreen from "./Screens/BCWLoginScreen";
import BCWRegisterScreen from "./Screens/BCWRegisterScreen";
import BCWActivateScreen from "./Screens/BCWActivateScreen";
import BCWAuthScreen from "./Screens/BCWAuthScreen";

const BCWAuthNavigator = createStackNavigator({
    authScreen: BCWAuthScreen,
    loginScreen: BCWLoginScreen,
    registerScreen: BCWRegisterScreen,
    activateScreen: BCWActivateScreen,
}, {
    initialRouteName: 'authScreen',
    headerMode: 'none',
});
export default BCWAuthNavigator;