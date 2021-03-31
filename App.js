import React, { Component } from "react";
import Category from "./Category";
import Navi from "./Navi";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import  NotFound  from "./NotFound";
import  CartList  from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";
export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async (categoryId) => {
    let get = "http://localhost:3000/products";
    if (categoryId) {
      get += "?categoryId=" + categoryId;
    }
    const response = await fetch(get);
    const json = await response.json();
    this.setState({ products: json });
  };
  changeCatogry = (x) => {
    this.setState({ currentCategory: x.categoryName });
    this.getProducts(x.id);
  };
  addToCard = (product) => {
    let newCart = this.state.cart;
    let addedCart = newCart.find((x) => x.product.id === product.id);
    if (addedCart) {
      addedCart.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + "addet to cart!");
  };
  removeCard = (product) => {
    let newCart = this.state.cart.filter((x) => x.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.warning(product.productName+",remove to cart!");
  };
  render() {
    let titleCategory = "Category List";
    let titleProduct = "Product List";
    let infoCatogory = {
      changeCatogry: this.changeCatogry,
      title: titleCategory,
      currentCategory: this.state.currentCategory,
    };
    let infoProduct = {
      currentCategory: this.state.currentCategory,
      title: titleProduct,
      products: this.state.products,
      addToCard: this.addToCard,
    };
    let infoNavi = {
      cart: this.state.cart,
      removeCard: this.removeCard,
    };
    let infoCart={
      cart:this.state.cart,
      removeCard:this.removeCard
    }
    return (
      <div className="App">
        <Container>
          <Navi info={infoNavi}></Navi>

          <Row>
            <Col xs="3">
              <Category info={infoCatogory}></Category>
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Product {...props} info={infoProduct}></Product>
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList {...props} info={infoCart}></CartList>
                  )}
                />
                <Route exact path="/form" component={FormDemo1}/>
                <Route exact path="/form2" component={FormDemo2}/>

                <Route component={NotFound}/>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//export default App;
