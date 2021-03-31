import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state={
        username:"",
        city:""
    }
    onSubmitHandler=(e)=>{
        alert(this.state.username+this.state.city)
        e.preventDefault();
    }
    onChangeHandler=(e)=>{
        let name=e.target.name;
        let value=e.target.value
        this.setState({[name]:value});
    }
    render() {
        return (
            <div>
                <form  onSubmit={this.onSubmitHandler}>
                    <h3>User Name </h3>
                    <input name="username" onChange={this.onChangeHandler} type="text"></input>
                    <h3>User Name={this.state.username} </h3>
                    <input name="city" onChange={this.onChangeHandler} type="text"></input>
                    <h3>city={this.state.city} </h3>
                    <input  type="submit" value="save" ></input>
                </form>
            </div>
        )
    }
}
