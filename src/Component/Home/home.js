import React, {Component} from 'react'
import Header from '../Home/header'
//import HomeForm from "../components/home-form";
//import HomeUploading from '../components/home-uploading'
//import HomeUploadSent from '../components/home-upload-sent'
//import _ from 'lodash'

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {
            componentName: 'HomeForm',
            data: null,
            uploadEvent: null,
        };


        this._renderComponent = this._renderComponent.bind(this)

    }

    render() {

        return (

            <div className={'app-container'}>
                <Header/>
                <div className={'app-content'}>

                    {this._renderComponent()}

                </div>
            </div>
        )
    }
}


export default Home;