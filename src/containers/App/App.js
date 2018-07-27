import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import styles from '../../styles.module.css';

class App extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <i className="fa fa-star"></i>
               <h1 >Environment: {__NODE_ENV__}</h1>
            </div>
        );
    }
}

export default App;