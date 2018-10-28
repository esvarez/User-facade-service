import React from 'react'
import './Graphs.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Doughnut} from 'react-chartjs-2';
import CircularProgress from '@material-ui/core/CircularProgress';

const Graphs = (props) => (
    <ReactCSSTransitionGroup
    transitionName = "anim"
    transitionAppear = {false}
    transitionAppearTimeout = {1000}
    transitionEnterTimeout = {1000}
    transitionEnter = {true}
    transitionLeave = {false}>
    { props.isGraphVisible &&
        <Card>
            <CardContent>
            {
                (props.data.length+"" === 0+"")?
                <div className="center">
                  <CircularProgress  size={100} />
                </div>:
                (<div>
                    <h1>Nivel de Ozono(O3) el dia 28 de junio del 2018</h1>
                    <Doughnut data={props.data}/>
                </div>)

            }
            </CardContent>
        </Card>
    }
    </ReactCSSTransitionGroup>
)

export default Graphs
