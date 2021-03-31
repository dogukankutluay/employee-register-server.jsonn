import React, { Component } from "react";
import { Table ,Button} from "reactstrap";
export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Unit In Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.info.cart.map((x) => (
            <tr key={x.product.id}>
              <td>{x.product.id}</td>
              <td>{x.product.categoryId}</td>
              <td>{x.product.productName}</td>
              <td>{x.product.unitPrice}</td>
              <td>{x.product.unitsInStock}</td>
              <td>{x.quantity}</td> 
              <td><Button color="danger" onClick={()=>this.props.info.removeCard(x.product)}>-</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
