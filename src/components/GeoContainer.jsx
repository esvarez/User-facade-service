import React from 'react'
import MapMx from './Map/Map'
import Filter from './Filter/Filter'
import CardDetail from './CardDetail/CardDetail'

const GeoContainer = (props) => (
    <div class="container">             
        <Filter 
            cities = {props.cities}
            citySelected = {props.citySelected}
            onChangeCity = { props.onChangeCity }
        />
        <CardDetail />
        <MapMx 
            citySelected = {props.citySelected}
        />
    </div>
)

export default GeoContainer