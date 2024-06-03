import React from "react";
import "./Popup.scss";

const Popup = ({message, onClose}) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <div className="popup-message">{message}</div>
                <button className="popup-close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
