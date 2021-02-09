import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { IntercomProvider } from 'react-use-intercom';

const INTERCOM_APP_ID = process.env.INTERCOM_ID;

ReactDOM.render(
  <React.StrictMode>
    <IntercomProvider autoBoot appId={INTERCOM_APP_ID}>
      <App />
    </IntercomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

