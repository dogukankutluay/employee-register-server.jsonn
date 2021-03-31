import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartSummery extends Component {
  renderSummery() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
        Your Cart
        </DropdownToggle>
        <DropdownMenu right>
            
          {this.props.info.cart.map((x) => (
            <DropdownItem key={x.product.id}>
                <Badge color="danger" onClick={()=>this.props.info.removeCard(x.product)}>-</Badge>
              {x.product.productName} --{" "}
              <Badge color="secondary">{x.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem ><Link to="cart">Cart Details</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderSummeryEmpty() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
         Your Cart Empty
        </DropdownToggle>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.info.cart.length <= 0
          ? this.renderSummeryEmpty()
          : this.renderSummery()}
      </div>
    );
  }
}
