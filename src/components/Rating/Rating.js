import React, { Component} from 'react'
import styles from './styles.module.css';

const RatingIcon = (props) => (<span>★</span>)

export class Rating extends React.Component {
  render() {
    const {percentage} = this.props;
    // const style = {
        
    // }
    console.log(this.props.children);
     const styleWidth = (this.props.children * 100) + '%'
     console.log('DIS IS THE STYLA ' + styleWidth);
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