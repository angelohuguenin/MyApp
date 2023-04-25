import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class FamousScreen extends Component{
  render(){
    return(
      <View>
        <AppHeader/>
          <Image 
            style={{
              width: 150,
              height: 150,
              marginTop: 35,
              marginLeft: 90,
          }}
            source={require('../assets/djavan.jpg')}/>

          <Text 
            style={{fontSize: 20,
              marginLeft: 50
            }}> 
            DJAVAN: Um ícone da MPB.
          </Text>

          <Image 
            style={{
              width: 150,
              height: 150,
              marginTop: 20,
              marginLeft: 90
            }}
              source={require('../assets/elis.jpg')}/>

          <Text 
            style={{
              fontSize: 20,
              marginLeft: 50
            }}> 
            ELIS REGINA: Considerada a maior cantora brasileira.</Text>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('HomeScreen')} 
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderRadius: 15,
              backgroundColor:"#FFBF00",
              margin: 10,
              width: 200,
              height: 50,
              marginTop: 50,
              marginLeft: 70
            }}>
              <Text> VOLTAR </Text>
          </TouchableOpacity>
      </View>
      
    );
  }
}