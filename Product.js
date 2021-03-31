import React, { Component } from "react";
import { Table, Button } from "reactstrap";
export default class Product extends Component {
    
  render() {
    return (
      <div>
        <h4>
          {this.props.info.title}-{this.props.info.currentCategory}{" "}
        </h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit </th>
              <th>Unit In Stock</th>
            </tr>
          </thead>
          <tbody>
         
            {this.props.info.products.map((x) => (
              <tr key={x.id}>
                <th scope="row">{x.id}</th>
                <td>{x.productName}</td>
                <td>{x.unitPrice}</td>
                <td>{x.quantityPerUnit}</td>
                <td>{x.unitsInStock}</td>
                <td >
                  {" "}
                  <Button outline color="secondary" onClick={()=>this.props.info.addToCard(x)}>
                    ADD
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
