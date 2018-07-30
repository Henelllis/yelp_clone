import React, { Component } from 'react';
//import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { Router }from 'react-router';
import 'font-awesome/css/font-awesome.css'
import styles from '../../styles.module.css';

class App extends React.Component {

    content () {
        return ( <Router 
                    routes={this.props.routes}
                    history={this.props.history} />)
    }

    
    render() {


        return (
            <div>
                {this.content()}
            </div>
        );
    }
}

export default App;