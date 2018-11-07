import React, { Component } from 'react';
import Colors from "../Style/Themes/Colors";

type Props = {};
export default class BCWHeader extends Component<Props> {
    render() {
        return (
            <Header style={{backgroundColor: Colors.blacktxt, justifyContent:'center', alignItems:'center'}}>
                {this.props.children}
            </Header>

        );
    }
}