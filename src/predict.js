// import React from "react"
// import * as tf from '@tensorflow/tfjs';
// const Predict = async () => {

//     const model = await tf.loadLayersModel('WEBSITE/backend/vgg_saved_modeljsse-me/model.json');
//     const result = model.predict('C:/Users/suhu/Desktop/Final_project/Website/backend/images/0a38b552372d.png')
//     console.log(result)


//     return (
//         <div> 
//             <h1>{result}</h1>
//         </div>
//     )


// }

// export default Predict;

import React,{useState, useEffect} from "react"
const tf = require('@tensorflow/tfjs');

// useEffect(() => {}, [])

const Predict=({img})=>{
    const handlePredict = () => {
        const MODEL_PATH = 'https://cdn.glitch.global/dd712284-b4e7-4ec9-9ea8-bdc54ab34cdb/model.json?v=1655154748644';
        (async () => {
          const model = await tf.loadLayersModel(MODEL_PATH);
          console.log(model.summary());       
          console.log(img.data)
        // let image="/Diagnose-me/src/0a38b552372d.png"
        let resize = tf.browser.fromPixels(img.data).resizeBilinear([224, 224])
        // let image = tf.image.resize(img, (1,255,255,3))
        resize.reshape([1,224,224,3])
        const predict = model.predict(resize)
        console.log(predict)
        })();
    }  
    return (
        <div> 
            <button type='submit' onClick={handlePredict}>Predict</button>   
        </div>
    )


}

export default Predict;