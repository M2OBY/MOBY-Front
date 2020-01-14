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



        this.state = {
            name: localStorage.getItem('name'),
            genre : localStorage.getItem('genre'),
            prenom :localStorage.getItem('prenom'),
            email : localStorage.getItem('email'),
            password : localStorage.getItem('password'),
            username :localStorage.getItem('username'),
            dateNaissance : localStorage.getItem('dateNaissance'),
            ville : localStorage.getItem('ville'),
            mobile: localStorage.getItem('mobile'),

        }
        this.handleChange.bind(this);
        //this.send.bind(this);

        //localStorage.setItem('text', " ");
    };

    send = event => {
        console.log("sendProfil:",this.state)
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
        API.profil(this.state.username,this.state.dateNaissance, this.state.name, this.state.genre, this.state.prenom, this.state.ville, this.state.mobile).then(function (data) {

            console.log("APIPROFILPAGEPROFIL:",data)
            localStorage.setItem('name', data.data.name);
            localStorage.setItem('prenom', data.data.prenom);
            localStorage.setItem('genre', data.data.genre);
            localStorage.setItem('dateNaissance', data.data.dateNaissance);
            localStorage.setItem('ville', data.data.ville);
            localStorage.setItem('mobile', data.data.mobile);

            window.location = "/profil"
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

            <div  className="Profil">
            <FormLabel className="titleProfil"> Profil</FormLabel>

                 <FormGroup controlId = "Sex" bsSize="large">
                 <FormLabel>sex</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <DropdownList
                data={["Homme","Femme", "Indéterminé"]}
                value = {this.state.genre ? this.state.genre:"Indéterminé"}
                onChange = {(value) => this.setState({genre:value})}
                />
                 </FormGroup>

                 <FormGroup controlId="name" bsSize="large">
                    <FormLabel>Nom</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl id = "name" type="name" value={this.state.name} onChange={this.handleChange}/>
                 </FormGroup>

                 <FormGroup controlId="prenom" bsSize="large">
                    <FormLabel>Prénom</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl id="prenom" type="prenom" value={this.state.prenom} onChange={this.handleChange}/>
                 </FormGroup>

                 <FormGroup controlId="dateNaissance" bsSize="large">
                    <FormLabel>Date Naissance</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl autoFocus type="dateNaissance" value={this.state.dateNaissance} onChange={this.handleChange}/>
                 </FormGroup>


                <FormGroup controlId="email" bsSize="large" >
                    <FormLabel>Email</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl autoFocus type="email" disabled value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup controlId="ville" bsSize="large">
                    <FormLabel>ville</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl value={this.state.ville} onChange={this.handleChange} type="ville"/>
                </FormGroup>
                <FormGroup controlId="mobile" bsSize="large">
                    <FormLabel>mobile</FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl value={this.state.mobile} onChange={this.handleChange} type="mobile"/>
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

