import React, { Component } from 'react';
import I18n from "./../../../../../src/Localization";
import BCWHeader from "../../../../Components/BCWHeader";
import BCWHeaderTitle from "../../../../Components/BCWHeaderTitle";

type Props = {};
export default class BCWHomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
    }


    render () {
        return (
            <Container>
                <BCWHeader>
                    <StatusBar barStyle="light-content"/>
                    <BCWHeaderTitle>{ I18n.t('home_header_title') }</BCWHeaderTitle>
                </BCWHeader>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Label type='detail' size='xl' text={ I18n.t('home_header_title') } />
                </View>
            </Container>
        );
    }
}