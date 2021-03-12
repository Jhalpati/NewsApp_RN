import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Center, Button } from 'native-base';
import  getArticles  from '../../service/news.js';
import  DataItems from '../../components/dataItems.js';
import { Alert, View, ActivityIndicator } from 'react-native';

export default class Tab1 extends Component {

constructor(props){
  super(props);

  this.state = {
    isLoading: true,
    data: null
  }
}

componentDidMount(){
  getArticles('sports').then(data => {
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

    let view = this.state.isLoading ? (

      <View>
        <ActivityIndicator animating={this.state.isLoading}/>
        <Text style={{marginTop:10, textAlign: 'center'}} >PLEASE WAIT</Text>
      </View>
    ) : <List 
    dataArray={this.state.data}
    renderRow={(item) => {
      return <DataItems data={item} />
    } } />


    return (
      <Container>
        <Content>
          
        {view}
        </Content>
      </Container>
    );
  }
}