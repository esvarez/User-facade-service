import React from 'react'
import './CardDetail.css'

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function CardDetail(){
    return(
        <Card>
            <CardHeader title="Informacion de la calidad del aire"/>
            <CardContent>
            <Grid container spacing={16}>
                <Grid item xs={8} sm={4}>
                    <Typography component="p">
                    <strong>Nivel de CO2:</strong> 1.3232
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <Typography component="p">
                    <strong>Nivel de CO2:</strong> 1.3232
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <Typography component="p">
                    <strong>Nivel de CO2:</strong> 1.3232
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <Typography component="p">
                    <strong>Nivel de CO2:</strong> 1.3232
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <Typography component="p">
                    <strong>Nivel de CO2:</strong> 1.3232
                    </Typography>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
    )
}

export default CardDetail
