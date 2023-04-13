import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID || 'GTM-XXXXXX', // To be configured
    events: {
      detailed_page_view: 'Detailed Page View',
    }
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

