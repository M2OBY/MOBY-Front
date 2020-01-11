import React from 'react';
import { Button, FormGroup, FormLabel,FormControl } from "react-bootstrap";
import API from '../../utils/API';
import '../../assets/css/index.css';



export class Verif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secretToken: ""
        }
        this.handleChange.bind(this);
        //this.send.bind(this);

        localStorage.setItem('text', " ");
    }

    send = event => {
        if (this.state.secretToken.length === 0) {
            localStorage.setItem('text', "token invalid"); this.setState({
                ...this.state
            });
            window.location = "/"
            return;
        }


        API.verif(this.state.secretToken).then(function (data) {
            console.log("verif : ",data)

            window.location = "/login"
        }, function (error ) {

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

                <FormGroup controlId="secretToken" bsSize="large">
                    <FormLabel>Verifier votre email</FormLabel>
                    <FormControl autoFocus type="secretToken" value={this.state.secretToken} onChange={this.handleChange}/>
                </FormGroup>


                <div className="erreur">{localStorage.getItem('text' )}</div>
                <Button
                    onClick={this.send}
                    block
                    bsSize="large"
                    type="submit"
                >
                    Valider
                </Button>
            </div> </div>)
    }
}