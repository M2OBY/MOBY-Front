import React, { Component } from 'react';
import '../assets/css/kidsIndex.css';

import NavAccueil from './BarreNavigation/barreNavAccueil';

import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard.js';
import { Login } from './login/login.js';
import { Verif } from './login/verif.js';
import { Signup } from './signup/signup.js';
import { upload } from './upload/upload';
import {Profil} from './Profil/Profil.js';
import {Speech} from './ReconnaissanceVocale/speech.js';
import {ExamplePDFViewer} from './AffichageDoc/pdfViewer.js'


export default class App extends Component {




    render() {

        return (

            <div className="container-drag">



                <NavAccueil/>

                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/verif' component={Verif} />
                    <Route path='/upload' component={upload} />
                    <Route path='/profil' component={Profil} />
                    <Route path='/speech' component={Speech} />
                    <Route path='/pdfViewer' component={ExamplePDFViewer} />

                </Switch>

            </div>
        );
    }
}



