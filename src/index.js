import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//import App from './Ejemplo/app'
import MapMx from './components/Map/Map'
import Filter from './components/Filter/Filter'
import CardDetail from './components/CardDetail/CardDetail'

ReactDOM.render(
    <div class="container">
    <Filter />
    <CardDetail />
        <MapMx />
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
