import React from "react"
import "./category.css"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import category1 from "../../assets/images/category1.png"
import category2 from "../../assets/images/category2.png"
import category3 from "../../assets/images/category3.png"
import category4 from "../../assets/images/category4.png"



export const Category = () => {
  
  return (
    <>
      <section className='category'>
        <div className='container flexcenter'>
           
              <div className='boxs'>
                <div className='box boxItems'>
                  <img src={category1} alt='' />
                  <p>BAG</p>
                </div>
                <div className='box boxItems'>
                  <img src={category2} alt='' />
                  <p>CLOTHES</p>
                </div>
                <div className='box boxItems'>
                  <img src={category3} alt='' />
                  <p>JEWELRY</p>
                </div>
                <div className='box boxItems'>
                  <img src={category4} alt='' />
                  <p>ELECTRONICS</p>
                </div>
                
              </div>
           
        </div>
      </section>
    </>
  )
}

export default Category