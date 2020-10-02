import React,{useState} from "react";
import firebase from "firebase";
import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class AddVehicleDetails extends Component {


    constructor(){
        super();
        this.state = {
            speed : 10
        };
    }

    componentDidMount(){
        const rootRef = firebase.database().ref().child('VehicleDetails');
        const speedRef = rootRef.child('speed');
        speedRef.on("value", snap=>{
            this.setState({
                speed:snap.val()
            });
        });
    }

    render() {


        return (

            <div style={{marginTop: 20}}>
                <h3>Add a New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Name:</label>
                        <input type="text" className="form-control"
                               name="name"
                               value={this.state.product_name}
                               onChange={this.onChangeProductName}/>

                    </div>
                    <div className="form-group">
                        <label> Price:</label>
                        <input type="text" className="form-control"
                               value={this.state.product_price}
                               onChange={this.onChangeProductPrice}/>
                    </div>
                    <div className="form-group">
                        <label> Category:</label>
                        <input type="text" className="form-control"
                               value={this.state.product_category}
                               onChange={this.onChangeProductCategory}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value=" Add Product" className="btn btn-primary"/>

                    </div>

                </form>
            </div>
        );
    }
}

export default App;
