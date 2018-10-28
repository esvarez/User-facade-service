import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/containers/home';
//data
import cities from './data/cities.json';

ReactDOM.render(<App cities={cities} />, document.getElementById('root'));
