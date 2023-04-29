import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const StarRating = ({ rating }) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const halfStars = Math.round(rating - fullStars);
    const emptyStars = maxRating - fullStars - halfStars;
    console.log(fullStars, halfStars, emptyStars)
    return (
        <div className="flex gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <span key={i} className="star"><BsStarFill fontSize={'25px'} color="#ffb900" /></span>
            ))}
            {[...Array(halfStars)].map((_, i) => (
                <span key={i + fullStars} className="star"><BsStarHalf fontSize={'25px'} color="#ffb900" /></span>
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={i + fullStars + halfStars} className="star"><BsStar fontSize={'25px'} color="#ffb900" /></span>
            ))}
        </div>
    );
};
export default StarRating;