import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/NewsMonkey/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={6} country={"us"} heading="General" catogery="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={6} country={"us"} heading="Business" catogery="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country={"us"} heading="Entertainment" catogery="entertainment" />} />
            <Route exact path="/health" element={<News key="health" pageSize={6} country={"us"} heading="Health" catogery="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={6} country={"us"} heading="Science" catogery="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country={"us"} heading="Sports" catogery="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country={"us"} heading="Technology" catogery="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

