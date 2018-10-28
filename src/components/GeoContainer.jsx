import React from 'react'
import MapMx from './Map/Map'
import Filter from './Filter/Filter'
import CardDetail from './CardDetail/CardDetail'

const GeoContainer = (props) => (
<<<<<<< HEAD
    <div className="container">             
        <Filter 
=======
    <div className="container">
        <Filter
>>>>>>> ed4b5b81a57d7690975e861f5b3b2ff8d78c9714
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
