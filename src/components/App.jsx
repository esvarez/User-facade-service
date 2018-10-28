import React, { Component, PropTypes } from 'react'
import GeoContainer from './GeoContainer'
import './App.css'
import cities from '../data/cities.json';
import factors from '../data/factors.json';

class App extends Component{
    constructor(...props){
        super(...props)
        this.state = {
            cities,
            factors,
            citySelected: {
                id: '',
                city: '',
                posicion:[]
            }
        }

        this.handleOnChangeCity = this.handleOnChangeCity.bind(this)
    }

    handleOnChangeCity(e){
        console.log(this.state.citySelected)
        console.log(e.target.value)
        console.log(e.target)

        this.setState({
            citySelected:{
                id: e.target.value,
                city: 'y',
                posicion: [10,20]
            }
        })
        console.log(this.state.citySelected)
    }

    render(){
        return(
            <GeoContainer
                cities = { this.state.cities }
                factors = { this.state.factors }
                citySelected = { this.state.citySelected }
                onChangeCity = { this.handleOnChangeCity }
            />
        )
    }

}

App.propTypes = { }
App.defaultProps = { }

export default App
