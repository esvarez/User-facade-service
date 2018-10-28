import React,{Component} from 'react'
import './Filter.css'

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';

import Button from '@material-ui/core/Button';

const Filter = (props) => (
  <Card>
    <CardHeader title="Variables a modificar" className="center" />
      <p className="center">
        Con las siguientes variables podremos simulos como afectarian
        la calidad del aire en el pais seleccionado
    </p>
    <CardContent className="content">
    <Grid container spacing={16}>
      <Grid item xs={12} sm={4}>
          <FormControl>
            <InputLabel htmlFor="age-simple">Ciudad</InputLabel>
            <Select
              onChange = { props.onChangeCity}
              value={props.ciudadSelected.id}
              inputProps={{
                name: props.ciudades.city,
                id: 'age-simple',
                cc: 'valorz'
              }}
            >
              <MenuItem value="">
                <em>Ninguna</em>
              </MenuItem>
              {
                props.ciudades.map( ciudad =>(
                  <MenuItem value={ciudad.id} id="x" cc=""> {ciudad.city}</MenuItem>
                ))
              }

            </Select>
          </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>

                      <FormControl variant="outlined">
                          <InputLabel
                            htmlFor="filtro1"
                          >
                            Filtro 1
                          </InputLabel>
                          <Input
                            defaultValue="Hello world"
                            className="input"
                            inputProps={{
                              'aria-label': 'Descripcion',
                            }}
                            type="number"
                            label="Filtro 1"
                            id="filtro1"
                          />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl variant="outlined">
                          <InputLabel
                            htmlFor="filtro2"
                          >
                            Filtro 2
                          </InputLabel>
                          <Input
                            defaultValue="Hello world"
                            className="input"
                            inputProps={{
                              'aria-label': 'Descripcion',
                            }}
                            type="number"
                            label="Filtro 2"
                            id="filtro2"
                          />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl variant="outlined">
                          <InputLabel
                            htmlFor="filtro3"
                          >
                            Filtro 3
                          </InputLabel>
                          <Input
                            defaultValue="Hello world"
                            className="input"
                            inputProps={{
                              'aria-label': 'Descripcion',
                            }}
                            type="number"
                            label="Filtro 3"
                            id="filtro3"
                          />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl variant="outlined">
                          <InputLabel
                            htmlFor="filtro4"
                          >
                            Filtro 4
                          </InputLabel>
                          <Input
                            defaultValue="Hello world"
                            className="input"
                            inputProps={{
                              'aria-label': 'Descripcion',
                            }}
                            type="number"
                            label="Filtro 4"
                            id="filtro4"
                          />
                      </FormControl>
                    </Grid>
                }
            <Grid item xs={12} className="center action-container">
                <Button variant="extendedFab" color="primary" aria-label="Delete" onClick={this.showSimulationVars}>
                    Simular <Icon>play_for_work</Icon>
                </Button>
            </Grid>
            </CardContent>
        </Card>
)

export default Filter
