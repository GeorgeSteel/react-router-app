import React,{Component} from 'react';
import Product from './Product';
import './css/Products.css'

export default class Products extends Component {

    render() {
        return (
            <div className="productos">
                <h2>Our products</h2>
                <ul className="lista-productos">
                    {Object.keys(this.props.products).map(
                        product => (
                            <Product info={this.props.products[product]}
                                     key={product}
                            />
                        )
                    )}
                </ul>
            </div>
        );
    }
}