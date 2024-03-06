import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, HelloWorldApp} from './HelloWorldApp'
import FirstApp from './FirstApp';

import './styles.css';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWorldApp/>
        <FirstApp  subTittle={ 25 +2}/> */}
        <CounterApp value={2}/>
    </React.StrictMode>
);