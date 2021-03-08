import React, { Component } from 'react';
import { ListItem, Left, Right, Thumbnail, Body, Text, Button } from 'native-base';

export default class DataItems extends Component{

constructor(props){
    super(props);
    this.data = props.data;

}

render(){
    return(
        <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage }} />
              </Left>
              <Body>
                <Text numberOfLines={1} >{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
  




    );
}

}