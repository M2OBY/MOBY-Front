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



export default class App extends Component {




    render() {

        return (

            <div className="container-drag">



                <NavAccueil/>

                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/verif' component={Verif} />
                    <Route exact path='/upload' component={upload} />
                    <Route exact path='/profil' component={Profil} />

                </Switch>

            </div>
        );
    }
}



