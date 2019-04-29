import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {imagen, nombre, precio, id} = props.info;
    return (
        <li>
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p>{nombre} <span>${precio}</span></p>
            <Link to={`/product/${id}`}>See it here</Link>
        </li>
    )
}

export default Product
