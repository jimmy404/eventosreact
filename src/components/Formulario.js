import React, { Component } from 'react';

import { CategoriasConsumer } from '../context/CategoriasContex'

class Formulario extends Component {
    state = {
        nombre: '',
        categoria: ''
    }
//Si el usuario agrega un evento o categoria
obtenerDatosEvento = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

    render(){
        return(
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca Tu evento por Nombre o Categoria
                    </legend>
                </fieldset>
                    <div className="uk-colum-1-3@m uk-margin">
                        <div className="uk-margin uk-margin="true>
                            <input
                                name="nombre"
                                className="uk-input"
                                type="text"
                                placeholder="Nombre de Evento o Ciudad"
                                onChange={this.obtenerDatosEvento}
                            />
                        </div>
                        <div className="uk-margin uk-margin="true>
                            <select className="uk-select"
                            name="categoria"
                            onChange={this.obtenerDatosEvento}
                            >
                            <option value="">-- Selecciona Categoria --</option>
                                <CategoriasConsumer>
                                    {(value) => {
                                        return ( value.categorias.map(categoria => ( 
                                            <option key={categoria.id} value={categoria.id}
                                            data-uk-from-select>
                                            {categoria.name_localized}
                                            </option>
                                        ))
                                    )
                                }}

                                </CategoriasConsumer>
                            </select>
                        </div>
                        <div>
                            <input type="submit" className="uk-button uk-button-danger"
                            value="Busca Eventos" />
                        </div>
                    </div>
            </form>
        );
    }
}

export default Formulario;