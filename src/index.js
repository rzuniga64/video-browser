import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


// Create component 'App'. Then insert component into the DOM.
// ReactDOM.render( <component>, reference to existing DOM node on the page)
// ReactDOM.render( <App />, document.querySelector('#root')
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
