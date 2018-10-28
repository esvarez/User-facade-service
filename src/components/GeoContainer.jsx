import React from 'react'
import MapMx from './Map/Map'
import Filter from './Filter/Filter'
import CardDetail from './CardDetail/CardDetail'

const GeoContainer = (props) => (
    <div class="container">
        <Filter 
            ciudades = {props.ciudades}
            ciudadSelect = {props.ciudadSelect}
            onChangeCity = { props.onChangeCity }
        />
        <CardDetail />
        <MapMx />
    </div>
)

export default GeoContainer