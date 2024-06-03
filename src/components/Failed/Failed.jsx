
import React from "react";
import "./Failed.scss";

const Failed = () => {
    return (
        <div className="failed-page">
            <h2 className="failed-title">Payment Failed</h2>
            <p className="failed-message">Oops! Something went wrong during payment.</p>
        </div>
    );
};

export default Failed;
