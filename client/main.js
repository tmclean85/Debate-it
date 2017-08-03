import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './main.css';
import App from '../routes';
import registerServiceWorker from './registerServiceWorker';

Meteor.startup(() => ReactDOM.render(<App />, document.getElementById('root')));
registerServiceWorker();