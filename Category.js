import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [
        
      ]
    };
  }
  componentDidMount(){
    this.getCategorys();
  }

  getCategorys=async()=>{
    const get="http://localhost:3000/categories";
    const response=await fetch(get);
    const json=await response.json();
    this.setState({categorys:json})
  }
  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4>
    
        <ListGroup>
          {this.state.categorys.map((x) => (
            <ListGroupItem color={x.categoryName===this.props.info.currentCategory ? "dark":"light"}
              onClick={() => this.props.info.changeCatogry(x)}
              key={x.id}
            > 
              {x.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
       
      </div>
    );
  }
}
