import React from 'react';
import Noticia from './Noticia';

const ListadoNoticias = ({listadoNoticias}) => {
    return ( 
        <div className="row">
            {listadoNoticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
     );
}
 
export default ListadoNoticias;