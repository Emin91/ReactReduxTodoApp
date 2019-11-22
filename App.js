import React from 'react';
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
