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
        dataChart:[],
        citySelected: {
            id: '',
            city: '',
            posicion:[]
        },
        position: [
            19.999440,
            -99.493139
        ],
        zoom: 4,
        isGraphVisible: false,
        o3: 0,
        o3Original: 1
    }
    componentWillMount = ()=>{
     fetch('https://api.datos.gob.mx/v2/sinaica?page=2')
         .then(response => response.json())
         .then(clima => {
            this.setState({
                clima:clima.results
            })
         })
     fetch('https://api.datos.gob.mx/v2/sinaica?city=Morelia&parametro=O3')
         .then(response => response.json())
         .then(data => Math.ceil(data.pagination.total/100))
         .then(lastPage => {
                 fetch('https://api.datos.gob.mx/v2/sinaica?city=Morelia&parametro=O3&page='+lastPage)
                 .then(response => response.json())
                 .then(data => {
                     let lastDate =
                     data = data.results.filter(item=> item['date-insert'].split('T')[0]=="2018-10-28")
                     data =
                     {labels: [
                         '00:00:00',
                         '03:00:00',
                         '06:00:00',
                         '09:00:00',
                     ],
                     datasets: [{
                         data: [.63, .83, .12,.78],
                         backgroundColor: [
                         '#FF6384',
                         '#36A2EB',
                         '#FFCE56',
                         '#FF0056'
                         ],
                         hoverBackgroundColor: [
                         '#FF6384',
                         '#36A2EB',
                         '#FFCE56',
                         '#F00E56'
                         ]
                     }]}
                    this.setState({
                        dataChart:data
                    })
                 })
            }
         )
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
            factors:factors,
            o3: (factors[0].value)?parseInt(this.state.o3Original) + parseInt(factors[0].value) : this.state.o3Original
        })
        //console.log(parseInt(this.state.o3Original) + parseInt(factors[0].value))
        //console.log(this.state.clima[0].state)
    }
    handleOnClickDetailButton = e => {
        console.log(e)
        this.setState({
            o3: 500,
            o3Original: 500,
            isGraphVisible: true
        })
    }

    render(){
        return(
        <div>
            <GeoContainer
                cities = { this.state.cities }
                factors = { this.state.factors }
                clima = {this.state.clima}
                dataChart = {this.state.dataChart}
                citySelected = { this.state.citySelected }
                onChangeCity = { this.handleOnChangeCity }
                onChangueFactor = {this.handleOnChangueFactors}
                position = { this.state.position }
                zoom = { this.state.zoom }

                o3 = {this.state.o3}
                isGraphVisible = { this.state.isGraphVisible }
                onclickDetailButton = { this.handleOnClickDetailButton }
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
