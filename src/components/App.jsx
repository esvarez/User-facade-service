import React, { Component } from 'react'
import GeoContainer from './GeoContainer'
import './App.css'
import cities from '../data/cities.json';
import factors from '../data/factors.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
    /*
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          data: [],
          name:''
        };
      }
      add(){
        var arr = this.state.data.slice();
        arr.push({'id':(new Date()).getTime(),'name':this.state.name})
        this.setState({data:arr})
      }
      handleChange(e){
        this.setState({name:e.target.value})
      }    

    render(){
        return(
            <div>
        Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />
         
        <ul>
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false} transitionEnterTimeout={3000} transitionEnter={true} transitionLeave={false}>
        {
          this.state.data.map(function(player) {
             return <li key={player.id}>{player.name}</li>
          })
        }
        </ReactCSSTransitionGroup>
        </ul>
         
      </div>
            )
        }
    
    */
App.propTypes = { }
App.defaultProps = { }

export default App
