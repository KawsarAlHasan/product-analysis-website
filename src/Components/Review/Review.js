import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, ratting, text, img} = props.review;
    return (
        <div className="review">
            <img src={img} alt="" />
            <p className='text-3xl'>{name}</p>
            <p className='text-lg'>Ratting: <span className='font-semibold'>{ratting}</span></p>
            <p>{text}</p>
        </div>
    );
};

export default Review;