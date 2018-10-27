import React from 'react';
import Curso from './Curso'
import Formulario from './Formulario'

const Lista = ( props ) => (
    <div>        
        <Formulario 
            onAddCourse = {props.onAddCourse}
        />
        <ul>
            {
                props.cursos.map( curso =>(
                    <Curso 
                        key = {curso.id}
                        id = { curso.id }
                        name = { curso.name }
                        teacher = { curso.teacher }                    
                    />
                ))
            }   
        </ul>
    </div>
)

export default Lista