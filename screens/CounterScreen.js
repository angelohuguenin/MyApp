import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import AppHeader from '../components/AppHeader';

export default class CounterScreen extends React.Component{
  
  constructor(){
    super();
    this.state ={
      like: 0,
      dislike: 0
    }
  }

  likeCount=()=>{
    this.setState({
      like: this.state.like + 1
    });
  }

  dislikeCount=()=>{
    this.setState({
      dislike: this.state.dislike + 1
    });
  }


  render(){
    return(
      <View>
        <AppHeader/>
        <View style={Styles.view}>
          <Text style={Styles.text}> Avalie meu app! </Text>

          

          <View style={{
            alignSelf: 'center'
          }}>

            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15
            }}>
              <Text> {this.state.like} </Text>
              <Text> {this.state.dislike} </Text>
            </View>

            <TouchableOpacity 
              onPress={this.likeCount}> 
              <Image
                style={{
                  
                }}
                source={require('../assets/likee.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.dislikeCount}> 
              <Image
                style={{
                  marginLeft: 80,
                  marginTop: -45
                }}
                source={require('../assets/dislike.png')}
              />
            </TouchableOpacity>
          </View>


          <TouchableOpacity onPress={()=> this.props.navigation.navigate('HomeScreen')} style={Styles.button}>
            <Text> VOLTAR </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const Styles= StyleSheet.create({
  view:{
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    fontSize: 20
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"#FFBF00",
    margin: 10,
    width: 200,
    height: 50,
    marginTop: 80
  }
});