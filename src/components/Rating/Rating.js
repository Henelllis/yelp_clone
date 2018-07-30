import React, { Component} from 'react'
import styles from './styles.module.css';

const RatingIcon = (props) => (<span>★</span>)

export class Rating extends React.Component {
  render() {
    const {percentage} = this.props;
    // const style = {
        
    // }
     const styleWidth = (this.props.children * 100) + '%'
    return (
        <div className={styles.sprite}>
            <div className={styles.top} style={{width: styleWidth}}>
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
            </div>
            <div className={styles.bottom}>
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
            </div>
        </div>    
    )
    

  }
}

export default Rating