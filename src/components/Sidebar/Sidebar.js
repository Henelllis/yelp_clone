import React, { Component } from 'react'
import styles from './styles.module.css'
import Listing from '../Listing/Listing';

export class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.heading}>
          <h1>{this.props.title}</h1>
        </div>
        <Listing places={this.props.places}
                //  onClick={this.onClick.bind(this)} 
                 />
      </div>
    )
  }
}

export default Sidebar