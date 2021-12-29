import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Nav from "./nav";
import Product from "./pages/products"
import Home from "./pages/home"
import AddProduct from "./pages/add-product";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/products" component={Product}/>
          <Route  path="/add-product" component={AddProduct}/>
        </Switch>
      </div>
    );
  }
}
