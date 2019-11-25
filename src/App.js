import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Notfoundpage from "./components/pages/Notfoundpage";
import Details from "./components/pages/Details";
import Home from "./components/pages/Home"
import Dashboard from "./components/pages/Dashboard"
import Upload from "./components/pages/Upload"

class App extends Component {
  render() {
    return (
      <div >
       <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/details" component={Details}/>
          <Route  component={Notfoundpage}/>
        </Switch>
       <Footer/>
      </div>
    );
  }
}

export default App;
