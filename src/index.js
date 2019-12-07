import React from 'react';
import { render } from 'react-dom';
//import './style.css';
import App from './App.js'
import {configureStore} from './store/index';
import { setReduxUser, setReduxAds } from './store/actions.js';


const store = configureStore();

store.subscribe(()=> console.log('redux: ', store.getState()))

store.dispatch(setReduxUser({name: 'angel',surname: 'cerrajeroharo'}))
store.dispatch(setReduxAds('soyunAd'))


render(<App />, document.getElementById('root'));


