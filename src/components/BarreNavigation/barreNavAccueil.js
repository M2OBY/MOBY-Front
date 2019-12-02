
import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import API from "../../utils/API";
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
    stat = event => {

        window.location = "/statistique";

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
                        <li className = "active" > <a href = "#" > Home </a></li >

                        <li> < a onClick={this.stat} href = "#" > Statistiques </a></li >
                        <li> <a onClick={this.profil} href = "#" > Profil </a></li>
                        <li> <a onClick={this.upload} href = "#" > Upload </a></li>
                        <li> <a onClick={this.speech} href = "#" > Reconnaissance Vocale </a></li>
                        <li> <a onClick={this.document} href = "#" > PDF </a></li>
                        <li className="buttonTop"> <a href = "#" >   </a>  </li>
                        <li className="buttonTop">         <Button className="buttonTop1"
                            onClick={this.disconnect}
                            block
                            bsSize="large"
                            type="submit"
                        >
                            Se déconnecter
                        </Button>
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
                                <li className = "active" > <a href = "#" > Home </a></li >









                                <li className="buttonTop">          <Button className="buttonTop1"
                                    onClick={this.connect}
                                    block
                                    bsSize="large"
                                    type="submit"
                                >
                                    connecter
                                </Button>
                                </li>
                                <li className="buttonTop">          <Button className="buttonTop1"
                                    onClick={this.inscription}
                                    block
                                    bsSize="large"
                                    type="submit"
                                >
                                    s'inscrire
                                </Button>
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



