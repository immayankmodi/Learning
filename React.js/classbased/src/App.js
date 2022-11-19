import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News';

export default class Apps extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={3} />
      </div>
    )
  }
}