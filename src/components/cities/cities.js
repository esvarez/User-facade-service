import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


import Select from '@material-ui/core/Select';

const Cities = (props)=>{
    return(
        <Card>
            <CardContent>
                <FormControl className="input">
                  <InputLabel htmlFor="city">Ciudad</InputLabel>
                  <Select
                    onChange = { props.onChangeCity }
                    value = {props.citySelected.id}
                  >
                    <MenuItem value="">
                      <em>Ninguna</em>
                    </MenuItem>
                    {
                        props.cities.map(item=>{
                            return <MenuItem key={item.id} value={item.posicion}>{item.city}</MenuItem>
                        })
                    }
                  </Select>
                </FormControl>
            </CardContent>
        </Card>
    )
}

export default Cities
