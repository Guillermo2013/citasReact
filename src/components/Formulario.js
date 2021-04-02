import React, {Fragment, useState}  from 'react';
import PropTypes from 'prop-types'
import uuid from 'uuid/dist/v4';

const Formulario = ({crearCita}) => {

    //creando state de citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario : '',
        fecha: '',
        horas: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false)

    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
        console.log(cita);
    }

    const { mascota,
        propietario,
        fecha,
        horas,
        sintomas} = cita

    const submitCita = e => {
        e.preventDefault();
        
        if(mascota.trim() === '' 
        || propietario.trim() === ''
        || fecha.trim() === ''
        || horas.trim() === ''
        || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        cita.id = uuid();
        actualizarError(false);
        crearCita(cita);
        actualizarCita({
            mascota: '',
            propietario : '',
            fecha: '',
            horas: '',
            sintomas: ''
        })
    }
    return (  
        <Fragment>
            <h2>Crear Citas</h2>

            { 
                error? <p className = "alerta-error">Todos los campos son Obligatorios</p> : null
            }
            <form
                onSubmit = {submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type = "text"
                    name = "mascota"
                    className = "u-full-width"
                    placeholder = "Nombre de mascota"
                    onChange = {actualizarState}
                    value = {mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type = "text"
                    name = "propietario"
                    className = "u-full-width"
                    placeholder = "Nombre de dueño"
                    onChange = {actualizarState}
                    value = {propietario}
                />
                <label>Fecha</label>
                <input 
                    type = "date"
                    name = "fecha"
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {fecha}
                />
                <label>Hora</label>
                <input 
                    type = "time"
                    name = "horas"
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {horas}
                />
                <label>Sintomas</label>
                <textarea 
                    name = "sintomas"
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {sintomas}
                ></textarea>
                <button
                    type = "submit"
                    className = "u-full-width button-primary"
                >
                    Agregar Citas
                </button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCitas: PropTypes.func.isRequired
}

 
export default Formulario;