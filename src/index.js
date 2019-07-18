import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './Route';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import stores from './store';

// ReactDOM.render(<Provider store={stores}><Routes /></Provider>, document.getElementById('root'));
ReactDOM.render(<Routes />, document.getElementById('root'));

registerServiceWorker();
