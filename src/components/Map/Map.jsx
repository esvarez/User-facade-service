import React from 'react'
import './Map.css'
import * as ReactLeaflet from 'react-leaflet'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
const { Map: LeafletMap, TileLayer, Marker, Popup, LayerGroup,Circle } = ReactLeaflet

const MapMx = (props) => (
    <Card>
        {(props.citySelected.posicion.length > 0)? props.citySelected.posicion : 'undefine'}
        <CardContent>
            {/*props.clima.map(item=>(<h6>{item.state}</h6>))*/}
            <LeafletMap center={(props.citySelected.posicion.length > 0)? props.citySelected.posicion : props.position } zoom={props.zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
            {props.citySelected.posicion.length > 0 &&
                <Marker position={props.citySelected.posicion}>
                    <Popup>
                        Usted seleccionó. <br/> Morelia.
                    </Popup>
                </Marker>
            }
            {props.citySelected.posicion.length > 0 &&
                <LayerGroup>
                    <Circle center={props.citySelected.posicion} fillColor="red" radius={props.o3*1} stroke={false} />
                    <Circle center={props.citySelected.posicion} fillColor="red" radius={props.o3*2} stroke={false} />
                    <Circle center={props.citySelected.posicion} fillColor="red" color="red" radius={props.o3*3} />
                </LayerGroup>
            }
            </LeafletMap>
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>

)
/*
{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const position = [this.state.lat, this.state.lng]
        return (
        )
     }
}
*/
export default MapMx
