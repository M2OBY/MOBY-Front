

import API from '../../utils/API';

import '../../assets/css/kidsIndex.css';
import Dash from './Dash';
import React from "react";


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.disconnect.bind(this);
    }

    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    choix2 = {
        tasks: [

        ]
    }



    getDataChoix2 = (val)=>{
        this.choix2.tasks = val;

        return val;
    }








    render() {

        return (
            <div className="Dashboard">


                <div  className="interface">
                    <div className="container">

                     <Dash/>

                    </div>
                </div>

            </div>


    )
    }
}

