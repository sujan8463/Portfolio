import React from 'react'
import { RiDownloadLine } from '@remixicon/react'

const Button = ({label,classes,icon }) => {
  return (
    <button className={`${classes} flex items-center gap-2` }>{label}
    {icon && (
        <span>
           <RiDownloadLine />
        </span>
    )}
    
    
    
    </button>
  )
}

export default Button