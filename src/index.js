import React from 'react';
import { render } from 'react-dom';
//import './style.css';
import App from './App.js'
import {configureStore} from './store/index';


const store = configureStore();


render(<App store={store}/>, document.getElementById('root'));


