import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Explore Soundscapes</h1>
                    <p>
                        Immerse yourself in the symphony of premium audio experiences.
                        Elevate your senses with state-of-the-art headphones, speakers,
                        and accessories, meticulously designed to redefine your auditory journey.
                        Let the melodies of innovation and craftsmanship resonate through your soul,
                        enriching every beat, every note, and every moment.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta"><a href="/about">Explore More</a></div>
                        <div className="banner-cta v2"><a href="/products">Shop Now</a></div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
