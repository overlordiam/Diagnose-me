import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './home.css'


function home() {
  return (
      <div className="homePage">
          <Carousel classname="carousel_" autoPlay={true} infiniteLoop={true} showStatus={false} dynamicHeight={true}>
                <div>
                    <img src="https://neoretina.com/blog/wp-content/uploads/2018/12/diabetic-rethonopaty-1200x675.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/41/ds00283_im00143_r7_openanglethu_jpg.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.visioncenter.org/wp-content/uploads/2020/07/Macular-Degeneration-1024x535.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
          </Carousel>

      </div>
   
  )
}

export default home
