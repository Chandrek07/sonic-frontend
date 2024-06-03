import React, {useState, useEffect} from "react";
import aboutImage1 from "../../assets/about/earbuds.jpg";
import aboutImage2 from "../../assets/about/headphones.jpg";
import aboutImage3 from "../../assets/about/speaker.jpg";
import aboutImage4 from "../../assets/about/watch.jpg";
import "./About.scss";

const About = () => {
    const images = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];
    const content = [
        "Welcome to Sonic Sensations, your ultimate destination for high-quality sound experiences.",
        "Our mission is to provide you with top-notch headphones, speakers, and audio gear.",
        "Discover a world of immersive audio with Sonic Sensations.",
        "Experience the future of audio technology with our stylish smartwatches."
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Us</h1>
                <p>{content[activeIndex]}</p>
                <div className="image-container">
                    <img
                        src={images[activeIndex]}
                        alt="Sonic Sensations Products"
                        className="about-image"
                    />
                </div>
                <p>
                    Our team of audio enthusiasts is dedicated to curating a collection of premium products from renowned brands and emerging innovators in the audio industry.
                </p>
                <p>
                    Thank you for choosing Sonic Sensations. Join us on this sonic adventure, and let the music move you.
                </p>
            </div>
        </div>
    );
};

export default About;
