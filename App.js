import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import AlertScreen from './screens/AlertScreen';
import CuriosidadesScreen from './screens/CuriosidadesScreen';
import FamousScreen from './screens/FamousScreen';
import CounterScreen from './screens/CounterScreen';


export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.bg}>
        <AppContainer/>
      </View>
    );
  }
}

const Styles= StyleSheet.create({
  bg:{
    backgroundColor: '#10A19D'
  }
});

var AppNavigator= createSwitchNavigator({
  HomeScreen: HomeScreen,
  AlertScreen: AlertScreen,
  CuriosidadesScreen: CuriosidadesScreen,
  FamousScreen: FamousScreen,
  CounterScreen: CounterScreen
});

const AppContainer = createAppContainer(AppNavigator);

