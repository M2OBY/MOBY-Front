import React from 'react';
import { Button, FormGroup, FormLabel,FormControl } from "react-bootstrap";
import API from '../../utils/API';
import '../../assets/css/index.css';
import classNames from 'classnames';
import {DropdownList} from "react-widgets";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-widgets/dist/css/react-widgets.css';


export class Profil extends React.Component {
    constructor(props) {
        super(props);
        let user = API.affichageProfil(localStorage.getItem('email'))
        console.log("profiltestapi",localStorage.getItem('secretToken'))

        this.state = {
            email: localStorage.getItem('email'),
            password: "",
            sex:"Homme",
            nom:"",
            age:"",
            prenom:"",

            user:localStorage.getItem('user'),
            sex:localStorage.getItem('sex'),
            nom:localStorage.getItem('nom'),
            age:localStorage.getItem('age'),
            prenom:localStorage.getItem('prenom'),
        }
        this.handleChange.bind(this);
        //this.send.bind(this);

        //localStorage.setItem('text', " ");
    };

    send = event => {
        if (this.state.email.length === 0) {
            localStorage.setItem('text', "email invalid"); this.setState({
                ...this.state
            });
            //window.location = "/"
            return;
        }
        if (this.state.password.length === 0) {
            localStorage.setItem('text', "pass invalid");this.setState({
                ...this.state
            });
            //window.location = "/"
            return;
        }
        API.profil(this.state.email, this.state.password, this.state.age, this.state.nom, this.state.sex, this.state.prenom).then(function (data) {
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', data.data.user);
             localStorage.setItem('age', data.data.age);
            localStorage.setItem('nom', data.data.nom);
            localStorage.setItem('sex', data.data.sex);


            window.location = "/dashboard"
        }, function (error ) {

            });

        localStorage.setItem('text', "pass ou user invalid");
        this.setState({
            ...this.state
        });
            ///console.log(error);
         //  window.location = "/";
            return  ;

    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="ProfilBack">

            <div className="Profil">
            <FormLabel className="titleProfil"> Profil</FormLabel>

                 <FormGroup controlId = "Sex" bsSize="large">
                 <FormLabel>sex</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <FormLabel>Sex</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <DropdownList
                data={["Homme","Femme", "Indéterminé"]}
                value = {this.state.sex}
                onChange = {(value) => this.setState({sex:value})}
                />
                 </FormGroup>

                 <FormGroup controlId="nom" bsSize="large">
                    <FormLabel>Nom</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl id = "nom" type="nom" value={this.state.nom} onChange={this.handleChange}/>
                 </FormGroup>

                 <FormGroup controlId="prenom" bsSize="large">
                    <FormLabel>Prénom</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl id="prenom" type="prenom" value={this.state.prenom} onChange={this.handleChange}/>
                 </FormGroup>

                 <FormGroup controlId="age" bsSize="large">
                    <FormLabel>Age</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl autoFocus type="age" value={this.state.age} onChange={this.handleChange}/>
                 </FormGroup>


                <FormGroup controlId="email" bsSize="large" >
                    <FormLabel>Email</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup controlId="username" bsSize="large">
                    <FormLabel>username</FormLabel>&nbsp;
                    <FormControl value={this.state.user} onChange={this.handleChange} type="username"/>
                </FormGroup>

                <div className="erreur">{localStorage.getItem('text' )}</div>
                <Button
                    onClick={this.send}
                    block
                    bsSize="large"
                    type="submit"
                >
                    Mise à jour
                </Button>
            </div> </div>)
    }
}

