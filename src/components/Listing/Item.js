import React, { Component } from 'react'
import classnames from 'classnames'

import Rating from 'components/Rating/Rating';
import styles from './styles.module.css'

export class Item extends Component {

  TestClicker = () => {
      console.log('PLACE');
  }
  render() {
    const {place} = this.props;
    return (
      <div
        className={styles.item} onClick={this.TestClicker}>
            
          <h1 className={classnames(styles.title)}>{place.name}</h1>
          <Rating className={styles.rating}>{place.rating/5}</Rating>
      </div>
    )
  }
}

export default Item