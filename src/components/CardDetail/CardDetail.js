import React from 'react'
import './CardDetail.css'

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const CardDetail = (props) => (
    <Card>
            <CardHeader title="Informacion de la calidad del aire"/>
            <CardContent>
            <Grid container spacing={16}>
                <Grid item xs={12} sm={4}>
                    <Button variant="outlined" color="primary" onClick={props.onclickDetailButton} >
                        Ozono<strong>(O3)</strong>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button variant="outlined" color="primary" >
                        Monóxido de carbono<strong>(CO)</strong>
                    </Button>
                </Grid>                
                <Grid item xs={12} sm={4}>
                    <Button variant="outlined" color="primary" >
                        Particulas Menores a 2.5<strong>(PM2.5)</strong>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button variant="outlined" color="primary" >
                        Dióxido de nitrógeno <strong>(NO2)</strong>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button variant="outlined" color="primary" >
                        Temperatura<strong>°C</strong>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button variant="outlined" color="primary" >
                        Particulas Menores a 10<strong>(PM10)</strong>
                    </Button>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
)

export default CardDetail
