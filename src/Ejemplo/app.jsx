import React, { Component, PropTypes } from 'react';
import Lista from './Lista'

class App extends Component{
    constructor(...props){
        super(...props)
        this.state = {
            courses: [
                {id: 1, name: 'Fundamentos l', teacher:'Omar'},
                {id: 2, name: 'Fundamentos ll', teacher:'Amaro'}
            ]

        }

        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    }

    handleOnAddCourse(evt){
        evt.preventDefault()        
        console.log('Evento en react');        
        let form = evt.target,
            curso = {
                id: form.id.value,
                name: form.name.value,
                teacher: form.teacher.value
            }
        this.setState({
            courses: this.state.courses.concat([curso])
        })
    }

    render() {
        return (
          <Lista 
            cursos={this.state.courses}
            onAddCourse = {this.handleOnAddCourse}
          />
        )
    }    
}
/*
const App = () => {
    return (
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    )
}
*/
App.propTypes = {
    //id: propTypes.number.isRequired,    
}
App.defaultProps = {
    //id
}
export default App;