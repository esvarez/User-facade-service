import React, { Component } from 'react'
import GeoContainer from './GeoContainer'
import './App.css'
import cities from '../data/cities.json';
import factors from '../data/factors.json';

class App extends Component{
    state = {
        cities,
        factors,
        clima:[],
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
    componentWillMount = ()=>{
     fetch('https://api.datos.gob.mx/v2/sinaica?page=2')
         .then(response => response.json())
         .then(clima => {
            this.setState({
                clima:clima.results
            })
         })
    }
    handleOnChangeCity = e=>{
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
        console.log(this.state.clima[0].state)
    }

    render(){
        return(
        <div>
            <GeoContainer
                cities = { this.state.cities }
                factors = { this.state.factors }
                clima = {this.state.clima}
                citySelected = { this.state.citySelected }
                onChangeCity = { this.handleOnChangeCity }
                onChangueFactor = {this.handleOnChangueFactors}
                position = { this.state.position }
                zoom = { this.state.zoom }
            />
            </div>
        )
    }

}

App.propTypes = { }
App.defaultProps = { }

export default App
