/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Cta from "../../components/CTA";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
    const titles = ["Hello, I'm", "Abdikhafar Issack", "Software Engineer"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0); // Current title being animated
    const [currentText, setCurrentText] = useState(""); // Current text being displayed
    const [visibleTitles, setVisibleTitles] = useState([]); // Fully displayed titles

    useEffect(() => {
        // If all titles have been animated, stop
        if (currentTitleIndex >= titles.length) return;

        const currentTitle = titles[currentTitleIndex];
        let letterIndex = 0; // Start at the first letter of the current title

        const interval = setInterval(() => {
            // Add one letter at a time to the current text
            if (letterIndex < currentTitle.length) {
                setCurrentText(currentTitle.slice(0, letterIndex + 1));
                letterIndex++;
            } else {
                // When the title is fully animated, move to the next title
                clearInterval(interval);
                setVisibleTitles((prev) => [...prev, currentTitle]); // Add to fully visible titles
                setCurrentText(""); // Reset current text for the next title
                setCurrentTitleIndex((prev) => prev + 1); // Move to the next title
            }
        }, 150); // Adjust the animation speed (150ms per letter)

        return () => clearInterval(interval); // Cleanup the interval
    }, [currentTitleIndex]);

    return (
        <motion.div
            id="#"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            className="pt-[0.5rem] ms-auto me-auto w-[95%] md:w-full"
        >
            {/* Titles Section */}
            <div className="flex flex-col justify-center items-center font-medium mb-6 tracking-wide">
                {/* Fully displayed titles */}
                {visibleTitles.map((title, index) => (
                    <p
                        key={index}
                        className={`${
                            index === 0
                                ? "text-lg md:text-xl mb-2 text-slate-200 font-semibold"
                                : index === 1
                                ? "text-4xl md:text-6xl mb-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow"
                                : "text-lg md:text-2xl mb-3 text-slate-200 font-semibold"
                        }`}
                    >
                        {title}
                    </p>
                ))}

                {/* Currently animating text */}
                {currentText && (
                    <p
                        className={`${
                            currentTitleIndex === 0
                                ? "text-lg md:text-xl mb-2 text-slate-200 font-semibold"
                                : currentTitleIndex === 1
                                ? "text-4xl md:text-6xl mb-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow"
                                : "text-lg md:text-2xl mb-3 text-slate-200 font-semibold"
                        }`}
                    >
                        {currentText}
                    </p>
                )}
                <Cta />
            </div>

            {/* Social Media Links and Call-to-Action */}
            <div className="flex justify-evenly md:justify-around items-end">
                <div className="flex flex-col gap-4 text-[#01f53f] text-sm md:text-xl justify-center items-center mb-0 md:mb-6">
                    <a
                        href="https://www.linkedin.com/in/abdikhafar-issack-b83301213/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <IoLogoLinkedin />
                    </a>
                    <a
                        href="https://x.com/AbdikhafarI"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                    >
                        <IoLogoTwitter />
                    </a>
                    <a
                        href="https://github.com/Abdikhafar-hub"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <IoLogoGithub />
                    </a>
                    <a
                        href="https://www.instagram.com/abdikhafar_issack/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>

                <img
                    className="hero-img w-52 md:w-72"
                    src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1728572100/WhatsApp_Image_2024-10-10_at_5.54.15_PM_sc8rwo.jpg"
                    alt="abdikhafar"
                    width="288px"
                    height="315px"
                />

                <a
                    href="#about"
                    className="animate-bounce text-2xl md:text-3xl text-[#01f53f] mb-0 md:mb-10"
                    aria-label="About Section"
                >
                    <FaAnglesDown />
                </a>
            </div>
        </motion.div>
    );
};

export default Hero;
