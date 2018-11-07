import { SwitchNavigator } from 'react-navigation';
import BCWLaunchScreen from "./Launch/BCWLaunchScreen";
import BCWTabController from "./Tab/BCWTabController";
import BCWAuthNavigator from "./Auth/BCWAuthNavigator";

const BCWSWitchNavigator = SwitchNavigator({
    Launch: {
        screen: BCWLaunchScreen
    },
    Tab: {
        screen: BCWTabController
    },
    Auth: {
        screen: BCWAuthNavigator
    },
}, {
    initialRouteName: 'Launch',
});
export default BCWSWitchNavigator;
