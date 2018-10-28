import React, { Component } from 'react'
import GeoContainer from './GeoContainer'
import './App.css'
import cities from '../data/cities.json';
import factors from '../data/factors.json';

class App extends Component{
    state = {
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
    handleOnChangeCity = (e)=>{
        this.setState({
            citySelected:{
                id: e.target.value,
                city: 'y',
                posicion: e.target.value
            },
            zoom: 10
        })
    }
    handleOnChangueFactors = e => {
        let id = e.target.id
        let factor = factors.filter(factor=>""+factor.id===id)
        factor = factor.length > 0 ? factor[0]:null;
        if(!factor){
            return;
        }
        factor.value = e.target.value
        this.setState({
            factors:factors
        })
    }

    render(){
        return(
            <GeoContainer
                cities = { this.state.cities }
                factors = { this.state.factors }
                citySelected = { this.state.citySelected }
                onChangeCity = { this.handleOnChangeCity }
                onChangueFactor = {this.handleOnChangueFactors}
                position = { this.state.position }
                zoom = { this.state.zoom }
            />
        )
    }

}

App.propTypes = { }
App.defaultProps = { }

export default App
