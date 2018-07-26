import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                text text text
            </div>
        );
    }
}
const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);

export default App;