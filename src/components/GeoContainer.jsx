import React from 'react'
import MapMx from './Map/Map'
import Filter from './Filter/Filter'
import CardDetail from './CardDetail/CardDetail'
import NavBar from './NavBar'

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
         />
        <MapMx
            className="space-around"
            factors={props.factors}
            citySelected = {props.citySelected}
            position = { props.position }
            zoom = { props.zoom }
        />
    </div>
</div>
)

export default GeoContainer
