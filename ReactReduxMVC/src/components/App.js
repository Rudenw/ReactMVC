import React from 'react';
import { Link } from 'react-router';
import Header from './common/Header'

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;