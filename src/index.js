import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Font Awesome configuration
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faMeetup } from '@fortawesome/free-brands-svg-icons'
library.add(faDiscord, faMeetup)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
