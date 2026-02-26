import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";

const Navbar = () => {

    const variants = {
        open: {clipPath: "circle(1200px at 43px 43px)" },
        transition: {
            type: "spring",
        },
        closed: {
            clipPath: "circle(23px at 43px 37px)",
            transition: {
                type: "spring",
                duration: 1,
            }
        },
    };

    const [menu, setMenu] = useState(false);

    const items = [
        {id:1, text: "About"},
        {id:2, text: "Service"},
        {id:3, text: "Work"},
        {id:4, text: "Content"},
    ]

    return (
        <div>
            <motion.div
            initial={{opacity: 0, y:-100}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.5}}
            className="container mx-auto hidden md:flex justify-between items-center py-6">
                <div className="text-xl font-bold lg:text-2xl flex item-center gap-0">
                    <span className=" font-poppins text-white">Seno</span>
                    <span className="font-poppins text-purple-500">Hoshi</span>
                </div>
                <div>
                    <ul className="hidden md:flex item-center space-x-6 list-none lg:text-lg md:text-base text-white">
                        {items.map(({id, text}) => (
                            <li
                                key={id}>{text}
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="font-semibold text-white md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-full">Download CV</a>
            </motion.div>

            <div className="flex md:hidden justify-between ">

                <motion.div
                animate= {menu ? "open" : "closed"}>
                    <motion.div
                    variants={variants}
                    onClick={() => setMenu((prev) => !prev)}                  
                        className="bg-white w-2/3 h-screen text-black fixed z-10">
                        <div className="px-7 py-6">
                            {menu ? (<IoMdMenu size={30}/>) :
                            <IoMdClose size={30}/>}
                        </div>
                        {menu && (
                            <div>
                               <ul className="space-y-6 text-black text-lg">
                                {items.map(({id, text}) => (
                                    <li key={id} className="hover:text-purple-500 duration-200 cursor-pointer">
                                        {text}</li>
                                ))}
                                </ul> 
                                <a className="text-lg bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-full mt-6">Download CV</a>
                            </div>
                        )}
                    </motion.div>
                </motion.div>

                    <motion.div
                    initial={{opacity: 0, x: 100, y: -100}}
                    animate={{opacity: 1, x: 0, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-xl font-bold flex items-center py-6 px-4">
                        <span className=" text-white">Seno</span>
                        <span className=" text-purple-500">Hoshi</span>
                    </motion.div>
            </div>
        </div>
    )
}

export default Navbar