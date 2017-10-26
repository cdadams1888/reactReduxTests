import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './components/Form';
import Header from './components/Header';
import Information from './components/Information'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><Header /><Information /><Form /></div>, document.getElementById('root'));
registerServiceWorker();




