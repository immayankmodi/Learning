import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class Apps extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<News key="home" pageSize={5} country={"us"} category={"general"} />} />
            <Route exact path="/business" element={<News key="business" pageSize={5} country={"us"} category={"business"} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country={"us"} category={"entertainment"} />} />
            <Route exact path="/general" element={<News key="general" pageSize={5} country={"us"} category={"general"} />} />
            <Route exact path="/health" element={<News key="health" pageSize={5} country={"us"} category={"health"} />} />
            <Route exact path="/science" element={<News key="science" pageSize={5} country={"us"} category={"science"} />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={5} country={"us"} category={"technology"} />} />
          </Routes>          
        </div>
      </Router>
    )
  }
}