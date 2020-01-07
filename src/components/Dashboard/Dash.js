import React, { useState, useEffect } from "react";
import '../../assets/css/kidsIndex.css';



function Dash() {
    const [joke, setJoke] = useState({
        setup: ``,
        punchline: ``
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
function Joke(props) {
    return (
        <div className="joke">
            <p className="setup">{props.joke.setup}</p>
            <p className="punchline">{props.joke.punchline}</p>
        </div>
    );
}
export default Dash