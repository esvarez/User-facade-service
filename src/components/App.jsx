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
            },
            position: [
                19.999440,
                -99.493139
            ],
            zoom: 4
        }

        this.handleOnChangeCity = this.handleOnChangeCity.bind(this)
    }

    handleOnChangeCity(e){
        this.setState({
            citySelected:{
                id: e.target.value,
                city: 'y',
                posicion: e.target.value
            },
            zoom: 10
        })
    }

    render(){
        return(
            <GeoContainer
                cities = { this.state.cities }
                factors = { this.state.factors }
                citySelected = { this.state.citySelected }
                onChangeCity = { this.handleOnChangeCity }
                position = { this.state.position }
                zoom = { this.state.zoom }
            />
        )
    }

}

App.propTypes = { }
App.defaultProps = { }

export default App
