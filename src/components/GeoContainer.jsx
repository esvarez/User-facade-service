import React from 'react'
import MapMx from './Map/Map'
import Filter from './Filter/Filter'
import CardDetail from './CardDetail/CardDetail'
import NavBar from './NavBar'
import Graphs from './Graphs/Graphs'
import Cities from './cities/cities'

const GeoContainer = (props) => (
<div>
    <NavBar/>
    <div className="container">
        <Cities
        cities = {props.cities}
        citySelected = {props.citySelected}
        onChangeCity = { props.onChangeCity }
        />
        <CardDetail
        className="space-around"
        onclickDetailButton = { props.onclickDetailButton }
         />
        <Graphs
        isGraphVisible = { props.isGraphVisible }
        data = {props.dataChart}
        />
        <MapMx
            className="space-around"
            factors={props.factors}
            clima={props.clima}
            citySelected = {props.citySelected}
            position = { props.position }
            zoom = { props.zoom }
            o3 = { props.o3 }
        />
        <Filter
            className="space-around"
            factors = {props.factors}
            onChangeCity = { props.onChangeCity }
            onChangeFactor = { props.onChangueFactor }
        />
    </div>
</div>
)

export default GeoContainer
