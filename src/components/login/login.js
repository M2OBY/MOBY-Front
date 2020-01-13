import React from 'react';
import { Button, FormGroup, FormLabel,FormControl } from "react-bootstrap";
import API from '../../utils/API';
import '../../assets/css/index.css';



export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange.bind(this);
        //this.send.bind(this);

        localStorage.setItem('text', " ");
    }

    send = event => {
        if (this.state.email.length === 0) {
            localStorage.setItem('text', "email invalid"); this.setState({
                ...this.state
            });
            window.location = "/"
            return;
        }
        if (this.state.password.length === 0) {
            localStorage.setItem('text', "pass invalid");this.setState({
                ...this.state
            });
            window.location = "/"
            return;
        }

        API.login(this.state.email, this.state.password).then(function (data) {
            console.log("hahaha",data)
            localStorage.setItem('secretToken', data.data.user.secretToken);
            localStorage.setItem("token",data.data.secretToken)


            sessionStorage.setItem('secretToken', data.data.user.secretToken);
            sessionStorage.setItem('user', data.data.user.username);
            localStorage.setItem('email', data.data.user.email);
            localStorage.setItem('nom', data.data.user.nom);
            localStorage.setItem('prenom', data.data.user.prenom);
            localStorage.setItem('sex', data.data.user.sex);
            localStorage.setItem('age', data.data.user.age);
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

        return (
            <div className="LoginBack">

            <div className="Login">

                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>


                </FormGroup>

                <div className="erreur">{localStorage.getItem('text' )}</div>
                <Button
                    onClick={this.send}
                    block
                    bsSize="large"
                    type="submit"
                >
                    Connexion
                </Button>
            </div> </div>
            )
            
    }
}