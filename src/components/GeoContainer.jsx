import React from 'react'
import MapMx from './Map/Map'
import Filter from './Filter/Filter'
import CardDetail from './CardDetail/CardDetail'

const GeoContainer = (props) => (
    <div className="container">             
        <Filter 
            cities = {props.cities}
            factors = {props.factors}
            citySelected = {props.citySelected}
            onChangeCity = { props.onChangeCity }
        />
        <CardDetail />
        <MapMx
            citySelected = {props.citySelected}
            position = { props.position }
            zoom = { props.zoom }
        />
    </div>
)

export default GeoContainer
