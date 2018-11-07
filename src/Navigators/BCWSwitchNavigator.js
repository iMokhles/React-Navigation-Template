import { SwitchNavigator } from 'react-navigation';
import BCWLaunchScreen from "./Launch/BCWLaunchScreen";
import BCWTabController from "./Tab/BCWTabController";

const BCWSWitchNavigator = SwitchNavigator({
    Launch: {
        screen: BCWLaunchScreen
    },
    Tab: {
        screen: BCWTabController
    },
    // Auth: {
    //     screen: ''
    // },
}, {
    initialRouteName: 'Tab',
});
export default BCWSWitchNavigator;
