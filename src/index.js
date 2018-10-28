import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/containers/home';
//data
import cities from './data/cities.json';

ReactDOM.render(<Home cities={cities} />, document.getElementById('root'));
