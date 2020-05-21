import React from 'react';
import 'react-native-gesture-handler';

import {View, Text, StyleSheet} from 'react-native';
import GlobalFont from 'react-native-global-font';

import MealsNavigator from './navigation/MealsNavigator';

export default class App extends React.Component {
  componentDidMount() {
    let fontName = 'Ubuntu-Regular';
    GlobalFont.applyGlobal(fontName);
  }
  render() {
    return <MealsNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    fontSize: 40,
    backgroundColor: 'red',
  },
});
