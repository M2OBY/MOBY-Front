import React, {Component} from 'react';
import API from  '../../utils/API';


export class test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elem: API.charger(),

        }

        const promise1 = new Promise(function(resolve, reject) {
            setTimeout(function() {

                resolve( API.charger());
            }, 300);
        })

        promise1.then(function(value) {
            console.log("promize",value);
            // expected output: "foo"
        });

    }



    render () {

        console.log("test",this.state.elem)
        let elem= this.state.elem
        return (
            <ul>
                {Object.keys(elem).map((v, i) => <li key={i}>{v} {test[v]}</li> )}

            </ul>
        )
    }
};

