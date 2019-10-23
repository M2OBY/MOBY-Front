import React,{Component} from 'react'
import Home from '../src/Component/Home/home'
//import View from '../pages/view'
import {Router,Route, Switch} from 'react-router-dom'

//import {history} from "../history";
import TopBar from '../src/Component/Home/top-bar'
import LoginForm from '../src/Component/Home/login'
import Header from '../src/Component/Home/header'
class App extends Component{


    constructor(props){
        super(props);

        this.state = {

            showLoginForm: false

        }
    }

    render(){

        const {showLoginForm} = this.state;

        return (
            <div className={'app-layout'}>
                <TopBar onShowLoginForm={() => {

                        this.setState({
                            showLoginForm: true,
                        });

                }} />
                {showLoginForm ? <LoginForm onClose={() => {
                      this.setState({
                            showLoginForm: false,
                        });

                }} /> : null}

              <div className={'app-container'}>
                <Header/>
                <div className={'app-content'}></div>
            </div>
               {/*  { <Router>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                    </Switch>
                </Router> }
                 */}

            </div>
        )
    }
}

export default App;