import React, { useState } from 'react';
import useSelect from '../hooks/useSelect';


const Formulario = ({ actualizarCategoria }) => {

    const arrayCategorias = [
        { value: "general", label: "General" },
        { value: "business", label: "Trabajo" },
        { value: "entertainment", label: "Entretenimiento" },
        { value: "health", label: "Salud" },
        { value: "science", label: "Ciencia" },
        { value: "sports", label: "Deportes" },
        { value: "technology", label: "Tecnologia" }
    ];

    const [Categoria, Seleccionar] = useSelect("general", arrayCategorias);

    const enviarCategoria = e => {
        e.preventDefault();

        if (Categoria) {
            actualizarCategoria(Categoria);
        } else {
            console.log("categoria vacia");
        }
    }


    return (
        <div className="row">
            <div className="col s12 center">
                <form
                    onSubmit={enviarCategoria}
                >
                    <h3>Encuentra noticias por categoria</h3>

                    <Seleccionar />

                    <input
                        type="submit"
                        className="waves-effect waves-light btn"
                        value="Buscar" />
                </form>

            </div>
        </div>
    );
}

export default Formulario;