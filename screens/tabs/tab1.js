import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import  getArticles  from '../../service/news.js';
import  DataItems from '../../components/dataItems.js';
import { Alert } from 'react-native';

export default class Tab1 extends Component {

constructor(props){
  super(props);

  this.state = {
    isLoading: true,
    data: null
  }
}

componentDidMount(){
  getArticles().then(data => {
    this.setState({
      isLoading: false,
      data: data,
    });
  }, error => {
    Alert.alert('Error', 'Something went wrong');
  }
  
  )

}

  render() {
    console.log(this.state.data);
    return (
      <Container>
        <Content>
          <List 
          dataArray={this.state.data}
          renderRow={(item) => {
            return <DataItems data={item} />
          } } />


        </Content>
      </Container>
    );
  }
}