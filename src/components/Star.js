import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        // debugger;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className="icona" />
                ) : stars >= number ? (
                    <FaStarHalfAlt className="icona" />
                ) : (
                    <AiOutlineStar className="icona" />
                )}
            </span>
        );
    });
    return (
        <>
            <div className="icon-style">
                {ratingStar}
                <p>({reviews} customer reviews)</p>
            </div>
        </>
    )
}

export default Star
