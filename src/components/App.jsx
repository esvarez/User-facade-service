import React, { Component, PropTypes } from 'react';
import GeoContainer from './GeoContainer';

class App extends Component{
    constructor(...props){
        super(...props)
        this.state = {            

        }
        
    }

    render(){
        return(
            <GeoContainer />
        )
    }
    
}

App.propTypes = { }
App.defaultProps = { }

export default App