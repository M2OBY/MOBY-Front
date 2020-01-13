import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))


