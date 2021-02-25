import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class Tab1 extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://picsum.photos/200' }} />
              </Left>
              <Body>
                <Text>Joy</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://picsum.photos/200' }} />
              </Left>
              <Body>
                <Text>Roy</Text>
                <Text note numberOfLines={1}>Its time to build a train . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}