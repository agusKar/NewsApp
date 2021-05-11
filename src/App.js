import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  const [ categoriaForm, actualizarCategoria ] = useState("");

  const [ listadoNoticias, actualizarListado ] = useState([]);

  useEffect(() => {

    const consultarApi = async () => {
      const urlApi = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoriaForm}&apiKey=f9705b95e587490a864e504e90521da6`;
  
      const resultadoApi = await fetch(urlApi);
      const noticias = await resultadoApi.json();
      actualizarListado(noticias.articles);

    }
    consultarApi();
  }, [categoriaForm])

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <Header
            titulo="Listado de noticias"
          />
        </div>
      </div>
      <div className="container">
        <Formulario
          actualizarCategoria={actualizarCategoria}
        />
        
        <ListadoNoticias 
          listadoNoticias={listadoNoticias}
        />
      
      </div>
    </Fragment>
  );
}

export default App;
