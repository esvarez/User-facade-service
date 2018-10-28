import React,{Component} from 'react'
import './Filter.css'

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';

import Button from '@material-ui/core/Button';
import Factor from '../factor/factor';

class Filter extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  state = {
    visible:false
  }

  showSimulationVars = () =>{
    this.setState({
      visible:true,
    })
  }

  render(){
    return(
        <Card>
            <CardContent className="content">
            {
                this.state.visible &&
                <div>
                    <h3 className="center">Variables a modificar</h3>
                    <p className="center">
                        Con las siguientes variables podremos simular como afectarian
                        la calidad del aire en la ciudad seleccionado
                    </p>
                    <Grid container spacing={16}>
                        {this.props.factors.map(item=>{
                            return (
                                <Grid key={item.id} item xs={12} sm={4}>
                                    <Factor id={item.id} key={item.id} title={item.name} type={item.type} value={item.value} onChangeFactor={this.props.onChangeFactor}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            }
            <Grid item xs={12} className="center action-container">
                <Button variant="extendedFab" color="primary" aria-label="Delete" onClick={this.showSimulationVars}>
                    Simular <Icon>play_for_work</Icon>
                </Button>
            </Grid>
            </CardContent>
        </Card>
        )
    }
}

export default Filter
