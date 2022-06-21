import React from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
// NOTE: if using fullpage extensions/plugins put them here and pass it as props


function Home() {
    return(
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.eyeiq.net/media/cds/eyeiq/moneyBasics/3438/images/1130x591-blog-diabetic-retinopathy.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.inmedpharma.com/wp-content/uploads/2020/05/Glaucoma-compared-to-normal-vision.png"
            alt="Second slide"
          />
      

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.drugwatch.com/wp-content/uploads/Degenerated-Macula-1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
);  
}



export default Home;
