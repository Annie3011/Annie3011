import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import purple from '../Project/Navbar/purple.avif';
import Social from '../Project/Navbar/Social.avif'
import gadgets from '../Project/Navbar/gadgets.jpg'
import '../Project/Advslide.css'
const Advslide = () => {
    return (
      <>
        <Carousel>
          <Carousel.Item>
          <img src={require("../Project/Navbar/Social.avif")} width={"1200px"} height={"550px"}></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={require("../Project/Navbar/purple.avif")}  width={"1200px"} height={"550px"}></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={require("../Project/Navbar/gadgets.jpg")} width={"1200px"} height={"550px"}></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 className='sdf'>Brands Available</h1>
        <hr></hr>
        <div id='clr1'>
        <div className='iio'>
        <img className='hjj'src={require("../Project/Navbar/samsung.png")} width={"230px"} height={"150px"}></img>
        <img className='hjj'src={require("../Project/Navbar/lg.png")} width={"230px"} height={"150px"}></img>
        <img className='hjj'src={require("../Project/Navbar/boat.png")} width={"230px"} height={"150px"}></img>
        <img className='hjj'src={require("../Project/Navbar/jbl.png")} width={"230px"} height={"150px"}></img>
        <br></br>
        <img className='hjj'src={require("../Project/Navbar/mi.png")} width={"230px"} height={"150px"}></img>
        <img className='hjj'src={require("../Project/Navbar/oneplus.png")} width={"230px"} height={"150px"}></img>
        <img className='hjj'src={require("../Project/Navbar/ptron.png")} width={"230px"} height={"150px"}></img>
        <img className='hjj'src={require("../Project/Navbar/realme.png")} width={"230px"} height={"150px"}></img>
        </div>
        </div>
        <hr></hr>
        <h1 className='sdf'>Our Products</h1>
         <hr></hr>
        </>
      );
}

export default Advslide