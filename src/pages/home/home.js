import React from 'react';
import { Parallax } from "react-parallax";
import './home.css';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const image1= "https://neoretina.com/blog/wp-content/uploads/2018/12/diabetic-rethonopaty-1200x675.jpg";
const image2= "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/41/ds00283_im00143_r7_openanglethu_jpg.jpg";
const image3 = "https://www.visioncenter.org/wp-content/uploads/2020/07/Macular-Degeneration-1024x535.jpg";


function Home() {
    return(
    <div style={{textAlign:'center',backgroundColor:"black"}}> 
        {/* <img src= "https://www.visioncenter.org/wp-content/uploads/2020/07/Macular-Degeneration-1024x535.jpg" width="1500" height ="700" /> */}
        <Parallax className='home' bgImage={ image1 } strength={200}>
        </Parallax>
        <h1>| | |</h1>
        <Parallax className='home' bgImage={ image2 } strength={200}>
        </Parallax>
        <h1>| | |</h1>
        <Parallax className='home' bgImage={ image3 } strength={200}>
        </Parallax>
    </div>
);  
}



export default Home;
