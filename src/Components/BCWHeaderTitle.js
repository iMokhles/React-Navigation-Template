import React, { Component } from 'react';
import Colors from "../Style/Themes/Colors";

type Props = {};
export default class BCWHeaderTitle extends Component<Props> {
    render() {
        return (
            <Title style={{color: Colors.shadows}}>{this.props.children}</Title>
        );
    }
}