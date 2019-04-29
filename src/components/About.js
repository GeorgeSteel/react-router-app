import React,{Component} from 'react';
import './css/About.css';

export default class Start extends Component {

    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="img us"/>
                </div>
                <div className="contenido">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor eget odio et ultrices. Donec non tempus lorem. Vivamus egestas magna ipsum, lobortis auctor turpis tempus sit amet. Quisque magna nibh, finibus a pellentesque vitae, finibus eu turpis. Suspendisse non blandit sem, sit amet faucibus dui. Nam nisl nisl, fringilla a suscipit at, fermentum sit amet erat. Fusce id arcu dui. Curabitur sit amet nisl tellus. Aliquam sollicitudin, nisi non dictum lobortis, lacus arcu vulputate orci, sit amet ullamcorper felis odio ut arcu. Cras et justo posuere, tempus orci tristique, placerat velit.</p>
                </div>
            </div>
        );
    }
}