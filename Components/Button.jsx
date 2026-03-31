import React from 'react'

export default function Button({children,onClick,type="button",className="",variant=''}) {
    return(
        
        <button type={type} onClick={onClick} className={` ${variant}${className}`}> {children} </button>
        
        
    );
    
   
};
