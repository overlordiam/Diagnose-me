import React, { useContext } from 'react'
import {ImageContext} from "../../Contexts/ImageContext"


const Result = () => {

   const {imageDR, resolvedDataDR} = useContext(ImageContext)
  return (
    <div>
<h1 style={{"margin":"2%"}}>RESULT OF DIAGNOSIS:</h1>
<img style={{"marginLeft":"2%"}} src={imageDR.preview} alt="uploaded image" width='300' height='300' />
<h3 style={{"margin": "2%"}}>The model has predicted the image to be in stage {resolvedDataDR} with an accuracy of 86%</h3>
</div>
  )
}

export default Result