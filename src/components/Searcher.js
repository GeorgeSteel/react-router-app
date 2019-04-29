import React, { Component } from 'react';
import './css/Searcher.css';

export default class Searcher extends Component {
  render() {
    return (
      <form className="buscador">
        <input type="text" placeholder="Search"/>
      </form>
    )
  }
}
