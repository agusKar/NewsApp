import React from 'react';


const Noticia = ({ noticia }) => {
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={noticia.urlToImage} />
                    <span className="card-title">{noticia.author}</span>
                </div>
                <div className="card-content">
                    <h5>{noticia.title}</h5>
                    <p>{noticia.description}</p>
                </div>
                <div className="card-action">
                    <a href="#">{noticia.url}</a>
                </div>
            </div>
        </div>
    );
}

export default Noticia;