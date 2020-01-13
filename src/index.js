import React from 'react'
import ReactDOM from 'react-dom'
import queryString from "query-string"
import './assets/css/index.css'

import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))


