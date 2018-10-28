import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const Factor = props => (
    <FormControl className="input">
        <InputLabel
          htmlFor={props.id}
        >
          {props.title}
        </InputLabel>
        <Input
          defaultValue={props.value}
          className="input"
          type={props.type}
          id={""+props.id}
          onChange={props.onChangeFactor}
        />
    </FormControl>
)
export default Factor;
