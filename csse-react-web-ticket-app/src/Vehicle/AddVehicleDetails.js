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
            <div className="App">
                <h1>{this.state.speed}</h1>
            </div>
        );
    }
}

export default App;
