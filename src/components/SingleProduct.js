import React from 'react';
import './css/SingleProduct.css'
import Error from './Error';

const SingleProduct = (props) => {
    if(!props || props.product === undefined) return (<Error/>);
    const {imagen, nombre, precio, descripcion} = props.product;
    return (
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">${precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default SingleProduct
