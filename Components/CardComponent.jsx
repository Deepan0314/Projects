import React from 'react'
import Card from './Card';
import truck from'../assets/truck.svg';
import hamburger from "../assets/hamburger.svg";
import icon from '../assets/truck.svg';
import badge from '../assets/badge.svg';


const CardComponent = () => {
    let Content = [{
        title: "Best Quality",
        desc: "Fresh ingredients and top-notch taste.",
        icon: <img src={hamburger} alt='truck' className='w-8 h-8'/>,
    },
    {
        title: "Fast Delivery",
        desc: "Hot and tasty food at your doorstep.",
        icon: <img src={truck} alt='truck' className='w-8 h-8'/>,
    },
    {
        title: "Great Offers",
        desc: "Exciting deals and discounts.",
        icon: <img src={badge} alt='truck' className='w-8 h-8'/>,
    },];

    return (
        <div className="grid md:grid-cols-3 w-2xl  flex-nowrap italic mx-auto gap-x-20 mb-16 mt-2">
            {Content.map((item, index) => (
                <Card key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
        </div>

    );

};

export default CardComponent