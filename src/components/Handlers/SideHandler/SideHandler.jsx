import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideHandler extends Component {
    render() {
        const tittle = this.props.tittle;
        const route = this.props.route;

        return (
            <Link to={route} className="sidehandler__container">
                <h5>{tittle}</h5>
                <img className="sidehandler__img" src={process.env.PUBLIC_URL + "/icons/arrow.svg"} alt="Blue Arrow" />
            </Link>
        );
    }
}

export default SideHandler;