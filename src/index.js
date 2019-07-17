import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './Route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
