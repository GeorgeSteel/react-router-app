import React, { Component } from 'react';
import './css/Searcher.css';

export default class Searcher extends Component {

    readSearch = e => {
        const query = e.target.value;

        this.props.searchProduct(query);
    }

    render() {
        return (
        <form className="buscador">
            <input type="text" placeholder="Search" onChange={ this.readSearch }/>
        </form>
        )
    }
}
