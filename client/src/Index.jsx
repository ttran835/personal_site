import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//bootstrap;
import 'bootstrap';
import '../../css/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../src/styles/custom.scss';
// import '../src/styles/index.scss';

render(<App />, document.getElementById('app'));
