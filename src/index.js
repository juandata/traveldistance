import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*require("./alert.js");*/


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
