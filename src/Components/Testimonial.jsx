import React, { useState } from "react";
import Card from "./Card";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Testimonial = (props) => {
    let reviews = props.reviews

    const [index, setIndex] = useState(0)

    function leftShifHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShifHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1)
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700  hover:shadow-lg cursor-pointer rounded-md" >
            <Card review={reviews[index]} />

            <div className="mx-auto mt-3 text-violet-500 text-2xl hover:text-violet-600 gap-3">
                <button
                    onClick={leftShifHandler}
                    className="cursor-pointer"><MdArrowBackIos /></button>
                <button
                    onClick={rightShifHandler}
                    className="cursor-pointer"><MdArrowForwardIos /></button>
            </div>

            <div className="mt-3 font-bold text-white  ">
                <button
                    onClick={surpriseHandler}
                    className="cursor-pointer bg-violet-500 hover:bg-violet-600 transition-all p-3 duration-200 rounded-sm px-10 py-2 text-lg">Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonial;