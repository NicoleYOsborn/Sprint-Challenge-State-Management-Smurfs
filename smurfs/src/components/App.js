import React from "react";
import './App.css'

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {smurfReducer as reducer} from '../reducers/smurfReducer';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList'

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <h1>🍄🍄    Welcome to Smurf Village!    🍄🍄</h1>
      <SmurfForm />
      <SmurfList />
    </div>
    </Provider>
  );
}
