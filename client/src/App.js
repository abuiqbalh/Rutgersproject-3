import React, { Component } from "react";
import logo from "./logo.svg";
import Jubotron1 from "./components/Jumbotron";
import Navbar from "./components/navbar";
import FooterPage from "./components/Footer1";
import Home from "./containers/Home";
import About from "./containers/About";
import Login from "./containers/Login";
import Surveys from "./containers/Surveys"
import Products from "./containers/Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/surveys" component={Surveys} />
          <FooterPage />
        </div>
        
      </Router>
      
      
     
      // <div className="App">
      //   <header className="App-header">
      //   <Navbar />
      //     <Jubotron1 />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //   hello
      //     {/* To get started, edit <code>src/App.js</code> and save to reload. */}
      //   </p>
      // </div>
    );
  }
}

export default App;
