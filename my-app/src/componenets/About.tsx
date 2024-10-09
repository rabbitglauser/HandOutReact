import React from 'react';
import '../styling/App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="navBar">
            <div className="Home">
                <Link to="/">Home</Link>
            </div>
            <div className="About">
                <Link to="/about">About</Link>
            </div>
            <div className="Content">
                <Link to="/content">Content</Link>
            </div>
            <div className="Product">
                <Link to="/product">Product</Link>
            </div>
            <div className="Notfound">
                <Link to="/notfound">Notfound</Link>
            </div>
        </div>
    );
}

export default Nav;
