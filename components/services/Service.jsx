import React from 'react'
import { FaFolder } from 'react-icons/fa'; 

const Service = ({ serviceName }) => {
  return (
    <div className="folder">
        <FaFolder size={20} />
        <p>{serviceName}</p>
      </div>
  )
}

export default Service