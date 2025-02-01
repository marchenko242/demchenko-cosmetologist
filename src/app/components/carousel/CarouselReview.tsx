"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./review.module.css"

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>

                <div>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className={styles.photoStyle}
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -100}}
                        transition={{duration: 0.5}}
                    />
                </div>
            <div className={styles.backGround}>
                <button
                    onClick={prevSlide}
                    className={styles.prevSlideButton}
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className={styles.prevSlideButton}
                >
                    ❯
                </button>
            </div>


        </div>
    );
};

export default Carousel;