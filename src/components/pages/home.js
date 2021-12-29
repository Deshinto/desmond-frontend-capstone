import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='home-wrapper'>
            <h1>Welcome to my Store!</h1>
            <div className="home-buttons-wrapper">
                <Link to="/products">Current products</Link>
                <Link to="/add-product">Add a products</Link>
            </div>
        </div>
    )
}