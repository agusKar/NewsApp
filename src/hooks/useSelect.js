import React, { useState } from 'react';


const useSelect = (stateInicial, opciones) => {

    const [state, actulizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e=>actulizarState(e.target.value)}
        >
            {opciones.map(categoria => (
                <option key={categoria.value} value={categoria.value}>{categoria.label}</option>
            ))}
        </select>
    );

    return [state, Seleccionar];

}
 
export default useSelect;