import React from 'react';
import '../styling/App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navBar">
            <div className="navItem">
                <Link to="/home">Home</Link>
            </div>
            <div className="navItem">
                <Link to="/about">About</Link>
            </div>
            <div className="navItem">
                <Link to="/content">Content</Link>
            </div>
            <div className="navItem">
                <Link to="/product">Product</Link>
            </div>
            <div className="navItem">
                <Link to="/notfound">Not Found</Link>
            </div>
            <div>
                <p>Hello world Home</p>
            </div>
        </nav>
    );
}

export default Nav;
