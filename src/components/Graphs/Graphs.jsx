import React from 'react'
import './Graphs.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
                Card
            </CardContent>
        </Card>    
    }
    </ReactCSSTransitionGroup>        
)

export default Graphs

