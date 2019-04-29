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
        products: []
    }

    componentWillMount() {
        this.setState({products: infProducts});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header/>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Products
                                products={this.state.products}
                            />
                        )} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" render={() => (
                            <Products
                                products={this.state.products}
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