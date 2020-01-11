
import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import API from "../../utils/API";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../assets/css/index.css';

export default class NavBarAccueil extends Component {

    constructor(props) {
        super(props);
        this.disconnect.bind(this);
}

    disconnect = event => {
        API.logout();
        window.location = "/";
    }

    connect = event => {

        window.location = "/";
    }
    upload = event => {

        window.location = "/upload";
    }
   dashboard = event => {

        window.location = "/Dashboard";

    }

    inscription= event => {

        window.location = "/signup";
    }
     profil = event => {
        window.location = "/profil";
    }
        speech = event => {
        window.location = "/speech";
    }
    document = event => {
        window.location = "/pdfViewer";
    }
    buttonConnect = test => {
        if (test === true){
            return (        <nav className="navbar navbar-default">
                <div className= "container-fluid" >
                    <div className= "navbar-header" > <a className = "navbar-brand" href = "#" >  </a> </div>
                    <ul className = "nav navbar-nav" >
                        <li className = "active" > <a href = "#" onClick={this.dashboard}> Home </a></li >

                        <li> <a onClick={this.profil} href = "#" > Profil user </a></li>
                        
                        <li> <a onClick={this.upload} href = "#" > Upload </a></li>
                        <li> <a onClick={this.speech} href = "#" > Gestion de fichier </a></li>
                        <li> <a onClick={this.speech} href = "#" > Reconnaissance Vocale </a></li>
                        <li> <a onClick={this.document} href = "#" > Support de Cours </a></li>
                        <li className="buttonTop"> <a href = "#" >   </a>  </li>
                        <li className="buttonTop">         <a className="buttonTop1"
                            onClick={this.disconnect}

                            href="#"
                        >
                            Se déconnecter
                        </a>
                        </li>

                    </ul>
                </div>
            </nav>)}

            else {
                return(
                     <nav className="navbar navbar-default">
                        <div className= "container-fluid" >
                            <div className= "navbar-header" ><a className = "navbar-brand" href = "#" >  </a> </div>
                            <ul className = "nav navbar-nav" >
                                <li className = "active" > <a href = "#" onClick={this.connect} > Home </a></li >
                                <li className="buttonTop" right>          <a className="buttonTop1"
                                    onClick={this.document}
                                    href ="#"
                                >
                                    Gestion de Contenu

                                </a>
                                </li>
                                <li className="buttonTop">          <a className="buttonTop1"
                                    onClick={this.inscription}

                                    href="#"
                                >
                                    s'inscrire
                                </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                      

                )
            }
        }

    render() {
let x ;
        if(API.isAuth()){
            x= this.buttonConnect(true)
        }else{
            x= this.buttonConnect(false)
        }
        return (
           x
      
    );
 
    }
}
