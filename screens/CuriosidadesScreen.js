import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class CuriosidadesScreen extends Component {
  render(){
    return(
      <View>

        <AppHeader/>

          <View style={Styles.view}>

             <Text style={{ fontSize:30, backgroundColor:'#FFBF00'}}> CURIOSIDADES </Text>

            <Text style={Styles.text}> 
              Você sabia que a música é utilizada como um método de tratamento para diversas doenças, tanto 
              psicológicas, como físicas?
            </Text>
            <Text> </Text>
            <Text style={Styles.text} > 
              Além disso, ela é considerada um meio de lazer extremamente educativo e sadio.
            </Text>
            <Text> </Text>
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
    height: 50
  }
});