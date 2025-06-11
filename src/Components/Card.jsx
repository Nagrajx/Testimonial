import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";

const Card = (props) => {
    let review = props.review;
    return (
        <div className="flex flex-col md:relative ">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img
                    className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
                    src={review.image} />
                <div className="w-[140px] h-[140px] rounded-full  bg-violet-500 absolute top-[-6px] z-[-20] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl  capitalize ">{review.name}</p>
            </div>

            <div className="text-center mt-2">
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>

            </div>

            <div className="flex justify-center mt-7 text-violet-500">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500"> 

                <p>{review.text}</p>
            </div>

            <div className="mx-auto mt-7 text-violet-500">
                <FaQuoteRight />
            </div>

            

        </div>
    )
}


export default Card