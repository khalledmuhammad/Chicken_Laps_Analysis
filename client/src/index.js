import React from 'react';
import ReactDOM from 'react-dom'
import {configureStore} from "@reduxjs/toolkit"

import { Provider } from 'react-redux'
import UserReducer from './store/userStore'

import AppReducer from './store/AppStore'

import { BrowserRouter } from "react-router-dom"
import App from './App';


const store = configureStore({
  reducer : {
    Users : UserReducer , 
 
    App : AppReducer
  }
})



ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter >  
        <App />
</BrowserRouter>
</Provider>
  ,
  document.getElementById('root')
);
