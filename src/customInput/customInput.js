import React, { useState } from 'react'
import "./customInput.css"

const CustomInput = ({ type, placeholder, className }) => {

  const [input, setInput] = useState("")
  const handleChange = e => {
    setInput(e.target.value)
    console.log(input)
  }

    

    return (
      <input type={type} placeholder={placeholder} className={className} value={input} required autoComplete="off" onChange={handleChange} />
    )
  } 

export default CustomInput;