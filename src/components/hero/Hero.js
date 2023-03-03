import React from "react";
import gambar1 from "../../assets/images/slide2.jpg"
import gambar2 from "../../assets/images/slide3.jpg"
import gambar3 from "../../assets/images/slide4.jpg"
import "./slider.css"
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div className="slider">
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="d-block"
          src={gambar1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block"
          src={gambar2}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block"
          src={gambar3}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;