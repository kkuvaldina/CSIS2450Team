//React App Dependencies 
import React, { Component } from 'react';//React Lib
import { BrowserRouter as Router, Route } from 'react-router-dom';//React's Router
import { connect } from "react-redux";//Redux Store Connection
//Web Layout
import { Container } from "react-bootstrap";
//Web-App Pages
import Home from './pages/Home/Home';
import CSV from './pages/CSV/CSV';

import logo from './logo.svg';
import './index.css';
import './App.css';
import Navbar from './pages/Layout/Navbar';

class App extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <Container fluid>
                <Navbar />
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route path="/CSV" component={CSV} />
                </Router>
            </Container>
        )
    }
}

export default connect(
    null
)(App);
