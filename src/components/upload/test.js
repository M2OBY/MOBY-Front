import React, {Component} from 'react';
import API from  '../../utils/API';


export class test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elem: API.charger(),


        }
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

