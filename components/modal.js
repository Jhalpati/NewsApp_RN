import React, { Component } from 'react';
import { Dimensions, WebView, Modal, Share } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Icon, Title, Button } from 'native-base';

class ModalComponent extends Component{
    render(){
        return(
            <View style={stlyes.container}>
                <Text>Modal</Text>
            </View>
        )
    }
}

export default ModalComponent;