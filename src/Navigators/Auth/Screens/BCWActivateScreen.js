import React, { Component } from 'react';
import Colors from "../../../Style/Themes/Colors";

type Props = {};
export default class BCWActivateScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
    }

    render () {
        return (
            <Container style={{backgroundColor: Colors.blacktxt}}>

            </Container>
        );
    }
}