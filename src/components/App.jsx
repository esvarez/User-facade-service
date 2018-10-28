import React, { Component, PropTypes } from 'react'
import GeoContainer from './GeoContainer'
import './App.css'
import cities from '../data/cities.json';

class App extends Component{
    constructor(...props){
        super(...props)
        this.state = {            
            ciudades: cities,
            ciudadSelected: {
                id: '',
                city: '',
                posicion:[]
            }
        }

        this.handleOnChangeCity = this.handleOnChangeCity.bind(this)        
    }

    handleOnChangeCity(e){
        console.log(this.state.ciudadSelected)
        console.log(e.target.value)
        console.log(e.target)
        
        this.setState({
            ciudadSelected:{
                id: e.target.value,
                city: 'y',
                posicion: [10,20]
            }            
        })
        console.log(this.state.ciudadSelected)        
    }

    render(){
        return(
            <GeoContainer 
                ciudades = { this.state.ciudades }  
                ciudadSelected = { this.state.ciudadSelected }              
                onChangeCity = { this.handleOnChangeCity }
            />
        )
    }
    
}

App.propTypes = { }
App.defaultProps = { }

export default App