import React from 'react'
import MapMx from './Map/Map'
import Filter from './Filter/Filter'
import CardDetail from './CardDetail/CardDetail'
import NavBar from './NavBar'
import Graphs from './Graphs/Graphs'

const GeoContainer = (props) => (
<div>
    <NavBar/>
    <div className="container">
        <Filter
            className="space-around"
            cities = {props.cities}
            factors = {props.factors}
            citySelected = {props.citySelected}
            onChangeCity = { props.onChangeCity }
            onChangeFactor = { props.onChangueFactor }
        />
        <CardDetail
        className="space-around"
        onclickDetailButton = { props.onclickDetailButton }
         />
        <Graphs 
        isGraphVisible = { props.isGraphVisible }
        />
        <MapMx
            className="space-around"
            factors={props.factors}
            clima={props.clima}
            citySelected = {props.citySelected}
            position = { props.position }
            zoom = { props.zoom }            
        />
    </div>
</div>
)

export default GeoContainer
