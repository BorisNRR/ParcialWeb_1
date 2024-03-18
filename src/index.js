import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from "./locales/es";
import localeEnMessages from './locales/en';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale="en-US" messages={localeEnMessages}>
    <App/>
  </IntlProvider>, 
  document.getElementById("root")
)
