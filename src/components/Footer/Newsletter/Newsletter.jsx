import React, {useState} from "react";
import Popup from "./Popup";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [subscriptionStatus, setSubscriptionStatus] = useState("");

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSubscriptionStatus("");
    };

    const handleSubscribe = async () => {
        try {
            if(!isValidEmail(email)) {
                console.log("Invalid email address");
                return;
            }

            const apiUrl = "https://formspree.io/f/mvojzyzj";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email}),
            });

            if(response.ok) {
                setIsPopupOpen(true);
                setSubscriptionStatus("Subscribed successfully!");
            } else {
                setIsPopupOpen(true);
                setSubscriptionStatus("Subscription failed.");
            }
        } catch(error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button onClick={handleSubscribe}>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/chandrek-bisht-b1382325b/">
                            <FaLinkedinIn size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://m.facebook.com/profile.php?id=100075350040425">
                            <FaFacebookF size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://twitter.com/ChandrekG">
                            <FaTwitter size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.instagram.com/chandrek_7/">
                            <FaInstagram size={14} />
                        </a>
                    </div>
                </span>
            </div>
            {isPopupOpen && (
                <Popup message={subscriptionStatus} onClose={closePopup} />
            )}
        </div>
    );
};

export default Newsletter;
