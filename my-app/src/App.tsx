import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import Content from './componenets/Content';
import Product from './componenets/Product';
import NotFound from './componenets/NotFound';
import ProductDetail from './componenets/ProductDetail'; // Import your new component
import './styling/App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/content" element={<Content />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetail />} /> {/* New route */}
                <Route path="/notfound" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
