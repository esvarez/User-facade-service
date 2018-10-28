import React, { Component, PropTypes } from 'react'
import GeoContainer from './GeoContainer'
import './App.css'

class App extends Component{
    constructor(...props){
        super(...props)
        this.state = {            
            ciudades: [
                { id: 11, city:"Morelia", posicion: [19.690461111111, -101.20478888889] },
                { id: 12, city:"Guadalajara", posicion: [20.719673888889, -103.35543472222] },
                { id: 13, city:"CDMX", posicion: [19.431249, -99.140542] }
            ]
        }

        this.handleOnChangeCity = this.handleOnChangeCity.bind(this)        
    }

    handleOnChangeCity(e){
        console.log(this.value);        
    }

    render(){
        return(
            <GeoContainer 
                ciudades={this.state.ciudades}
            />
        )
    }
    
}

App.propTypes = { }
App.defaultProps = { }

export default App