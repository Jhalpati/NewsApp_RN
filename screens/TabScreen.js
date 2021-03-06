import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Right, Body, Title } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'lightblue'}} hasTabs>
          <Left/>
          <Body>
          <Title>News App</Title>
          </Body>
          <Right/>
          </Header> 
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

