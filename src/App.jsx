import React, { Component } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import {images} from "./data/CarouselData.jsx";

export default class App extends Component {
  render() {
    return (
        <Carousel images={images} />
    );
  }
}