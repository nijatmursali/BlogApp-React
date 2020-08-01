import {createStore} from 'redux';
import reducer from './reducers/index.js';
import $ from 'jquery';
import axios from 'axios';
import json from './json/main.json';


console.log("json is: "+ json);

const initState = json;

export const store = createStore(
    reducer,
    initState,
    window.devToolsExtension && window.devToolsExtension()
);