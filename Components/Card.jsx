import React from 'react'



export default function Card({title,desc,icon=""}){
 return(
    <>
    <div className='border p-4 rounded-xl shadow-lg inset inset-shadow-brown-500/50'>
        <div className='px-8'>{icon}</div>
        <h3 className='text-red-700 font-semibold text-xl'>
            {title}
        </h3>
        <p>{desc}</p>
    </div>
    </>
 );
};

