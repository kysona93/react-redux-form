import React from 'react';
import Navigation from './navigation.js';
import Display from './display.js';
import Box from './box.js';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation />
                <Display />
            </div>
        )
    }

}


