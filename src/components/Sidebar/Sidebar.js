import React, { Component } from 'react'
import styles from './styles.module.css'

export class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.heading}>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

export default Sidebar