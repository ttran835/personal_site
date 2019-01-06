import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//bootstrap;
import 'bootstrap/dist/css/bootstrap.css';
import '../dist/scss/custom.scss';

render(<App />, document.getElementById('app'));
