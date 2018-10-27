import React from 'react'

const Formulario = (props) => (
    <form onSubmit={props.onAddCourse}>
        <input type="text" name="name" placeholder="Nombre profesor" id="" required/>
        <input type="text" name="teacher" placeholder="Profesor" id="" required/>
        <input type="hidden" name="id" value={Math.floor(Math.random()*100)}/>
        <input type="submit" value="enviar"/>    
    </form>
)

export default  Formulario
