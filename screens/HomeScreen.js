import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import AppHeader from '../components/AppHeader';

class HomeScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
          <View style={Styles.container}>
            <TouchableOpacity style={Styles.buttons} onPress={()=> this.props.navigation.
            navigate('CuriosidadesScreen')}>
              <Text style={Styles.text}> Curiosidades </Text>

            </TouchableOpacity>

            <TouchableOpacity style={Styles.buttons} 
              onPress={()=> this.props.navigation.navigate('FamousScreen')
            }>
              <Text style={Styles.text}> Artistas Famosos </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.buttons}>
              <Text style={Styles.text}> Músicas </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.buttons}>
              <Text style={Styles.text}> Lançamentos </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.buttons} 
              onPress={()=> this.props.navigation.navigate('CounterScreen')
            }>
              <Text style={Styles.text}> Avalie meu app! </Text>

            </TouchableOpacity>
          </View>
       
      </View>
    );
  }
}

const Styles= StyleSheet.create({
  buttons:{
    width: 300,
    height: 70,
    backgroundColor: '#FFBF00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom:20,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#610B0B'
  },
  container:{
    alignSelf: 'center',
    marginTop: 10
  },

  text:{
    fontSize: 20
  }

});

export default HomeScreen;


