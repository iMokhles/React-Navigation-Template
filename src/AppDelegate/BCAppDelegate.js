import React, { Component } from 'react';
import BCWSWitchNavigator from "../Navigators/BCWSwitchNavigator";

type Props = {};
export default class BCAppDelegate extends Component<Props> {

    constructor(props) {
        super(props);
    }
    render () {
        return (
            <BCWSWitchNavigator/>
        );
    }
}
