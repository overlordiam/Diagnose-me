import React, { useContext } from 'react'
import {ImageContext} from "../../Contexts/ImageContext"


const Result = () => {

   const {image, resolvedData} = useContext(ImageContext)

  return (
    <div>
<h1>RESULT OF DIAGNOSIS:</h1>
<img src={image.preview} alt="uploaded image" width='300' height='300' />
<h3>The model has predicted the image to be in stage {resolvedData} with an accuracy of 85%</h3>
</div>
  )
}

export default Result