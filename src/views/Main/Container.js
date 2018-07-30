import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

export class Container extends React.Component {

    onReady(mapProps, map) {
    // When the map is ready and mounted
    }
    render() {
        return (
        <div>
            Hello from the container
            <Map 
                onReady={this.onReady.bind(this)}
                google={this.props.google}/>
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDHnJVneFswajFMeUqgzToFUd3u8zR1IiA"
})(Container);