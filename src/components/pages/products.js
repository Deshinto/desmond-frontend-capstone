import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("https://arcane-inlet-69390.herokuapp.com/item/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data,
                loading: false
            })
        })
        .catch(error => {
            console.log("Error getting items ", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderProducts() {
        const itemsHtml = this.state.items.map(item => (
            <div className="item-wrapper" key={item.id}>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
            </div>
        ))

        return itemsHtml
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='items-page-wrapper'>
                    <h2>Products</h2>
                    <div className='items-wrapper'>
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className='items-page-wrapper'>
                    <h2>Products</h2>
                    <div className='items-wrapper'>
                        <div className="error">An error occured... Please try again later.</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='items-page-wrapper'>
                    <h2>Products</h2>
                    <div className="items-wrapper">
                        {this.renderProducts()}
                    </div>
                </div>
            )
        }
    }
}