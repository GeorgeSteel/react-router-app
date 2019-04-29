import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Error from './Error';
import Products from './Products';
import infProducts from '../data/data.json';
import Header from './Header';
import SingleProduct from './SingleProduct';
import Nav from './Nav';
import Contact from './Contact'

export default class Router extends Component {
    state = {
        products: [],
        search: ''
    }

    componentWillMount() {
        this.setState({products: infProducts});
    }

    searchProduct = query => {
        if (query.length > 3) {
            this.setState({
                search: query
            });
        } else {
            this.setState({
                search: ''
            });
        }
    }

    render() {

        let products = [...this.state.products];
        let search = this.state.search;
        let result;

        if (search !== '') {
            result = products.filter(product => (
                product.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1
            ));
        } else {
            result = products;
        }

        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header/>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Products
                                products={result}
                                searchProduct={ this.searchProduct }
                            />
                        )} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" render={() => (
                            <Products
                                products={result}
                                searchProduct={ this.searchProduct }
                            />
                        )} />
                        <Route exact path="/product/:id" render={(props) => {
                            let id = props.location.pathname.replace('/product/', '');
                            return(
                                <SingleProduct
                                    product={this.state.products[id]}
                                />
                            )
                        }} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}