import React from 'react'
import MapMx from './Map/Map'
import Filter from './Filter/Filter'
import CardDetail from './CardDetail/CardDetail'

const GeoContainer = (props) => (
    <div class="container">
        <Filter 
            ciudades={props.ciudades}
        />
        <CardDetail />
        <MapMx />
    </div>
)

export default GeoContainer