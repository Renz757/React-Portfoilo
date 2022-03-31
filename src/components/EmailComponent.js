import React from "react";

function EmailComponent() {
    return (
        <>
            <div className="col-12 col-md-12">
                <h3>Join Our Mailing List</h3>
                <p>Sign up and save 15% on your next online order</p>
            </div>
            <div className="col-12 col-md-12">
                <label htmlFor="email"></label>
                <input className="emailStyle" id="email" placeholder="Enter Email" />
                <button className="btn email-btn">Enter</button>
            </div>
        </>
    );
}

export default EmailComponent;