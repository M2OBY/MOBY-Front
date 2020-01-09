import API from '../../utils/API';

import '../../assets/css/kidsIndex.css';

import React, { useState, useEffect } from "react";
import '../../assets/css/kidsIndex.css';


function Joke (props)  {
    return (
        <div className="joke">
            <p className="setup">{props.joke.setup}</p>
            <p className="punchline">{props.joke.punchline}</p>
        </div>
    );
}
function Dash(){
    const [joke, setJoke] = useState({
        setup: "",
        punchline: ""
    });

    useEffect(() => {
        fetchJoke();
    }, []);

    function fetchJoke() {
        fetch("https://official-joke-api.appspot.com/jokes/programming/random")
            .then(resp => resp.json())
            .then(data => setJoke(data[0]));
    }

    return (
        <div className="containerDash">
            <div className="Dash">
                <Joke joke={joke} />
                <button onClick={() => fetchJoke()}>Une autre blague</button>
            </div>
        </div>
    );
}


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

