import React, { Component } from 'react'
import './Map.css'
import * as ReactLeaflet from 'react-leaflet'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

/*
<Marker position={position}>
<Popup>
Usted seleccionó. <br/> Morelia.
</Popup>
</Marker>
*/

class MapMx extends Component {
    constructor(...props){
        super(...props)
        this.state = {
            lat: 19.999440, 
            lng: -99.493139,
            zoom: 4            
        }
        console.log(this.props)
    }
    render(){
        const position = [this.state.lat, this.state.lng]
        return (
            <Card>
                {this.props.ciudadSelected.id}
                <CardContent>                    
                    <LeafletMap center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                    </LeafletMap>
                </CardContent>
                <CardActions>
                    <Button size="small">Simulador</Button>
                </CardActions>
            </Card>    
        )
     }
}
export default MapMx