// src/components/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Sample static data to simulate fetching
const products = [
    { id: '1', name: 'Product One', description: 'Description of Product One' },
    { id: '2', name: 'Product Two', description: 'Description of Product Two' },
    { id: '3', name: 'Product Three', description: 'Description of Product Three' },
];

const ProductDetail = () => {
    // Use useParams to access the URL parameter
    const { id } = useParams<{ id: string }>();

    // Simulate fetching data by finding the product based on the id
    const product = products.find((product) => product.id === id);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetail;
