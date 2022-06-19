import React from 'react'
import "./customButton.css"

const CustomButton = ({children, className}) => {

   

    return (
      <button className={className === "Undefined" ? "overlay_btn" : className}>
        {children}
    </button>
  )

}


export default CustomButton;