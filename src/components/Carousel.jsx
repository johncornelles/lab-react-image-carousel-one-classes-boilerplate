import React, { Component } from "react";
import "./Carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currImage: 0
    };
  }

  prev = () => {
    let images = this.props.images
    let newIndex = ((this.state.currImage - 1 + images.length) % images.length)
    this.setState({currImage: newIndex})
  }
  next = () => {
    let images = this.props.images
    let newIndex = (this.state.currImage + 1) % images.length
    this.setState({currImage: newIndex})
  }
  render() {
    const images  = this.props.images;
    return (
      <div className="carousel">
      <button onClick={this.prev}><ArrowBackIosIcon/></button>
        <div className="datas">
          <h1>{images[this.state.currImage].title}</h1>
          <p>{images[this.state.currImage].subtitle}</p>
          <img src={images[this.state.currImage].img} alt="" />
        </div>
      <button onClick={this.next}><ArrowForwardIosIcon/></button>
      </div>
    );
  }
}

export default Carousel;