import React from 'react';
import { Button, FormGroup, FormLabel,FormControl } from "react-bootstrap";
import API from '../../utils/API';
import '../../assets/css/index.css';



export class upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: ""
        }
        this.handleChange.bind(this);
        //this.send.bind(this);

        localStorage.setItem('text', " ");
    }

    send = event => {
        if (this.state.file.length === 0) {
            localStorage.setItem('text', "file invalid"); this.setState({
                ...this.state
            });
            //window.location = "/"
            return;
        }
        localStorage.setItem('text', "file succés"); this.setState({
            ...this.state
        });

        let _send = {
            file: this.state.file,

        }
        API.upload(_send).then(function (data) {



            //window.location = "/upload"
        }, function (error ) {
            console.log("erreeeor",error);
        });



        //  window.location = "/";
        return  ;

    }
    handleChange = event => {
        console.log("file",event.target.value)
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {

        return (

        <div className="LoginBack">

            <div className="Login">

                <FormGroup controlId="file" bsSize="large">
                    <FormLabel>Choisir un fichier : </FormLabel>
                    <FormControl autoFocus type="file" value={this.state.file} onChange={this.handleChange}/>

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