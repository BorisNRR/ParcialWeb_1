import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from "./locales/es"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale="es-Es" messages={localeEsMessages}>
    <App/>
  </IntlProvider>, 
  document.getElementById("root")
)
