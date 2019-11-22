import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native'
import Todo from './src/Todo';
import store from './src/store'
import { Provider } from 'react-redux'

export default class App extends React.Component {

	render() {
		return (
      <Provider store={store}>
          <Todo />
      </Provider>

	  );
  } 
} 



const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#262929',
},
});	