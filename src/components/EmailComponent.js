import React from "react";

function EmailComponent() {
    return (
        <>
            <div className="col col-md-3">
                <p>Sign up now to get the latest deal!</p>
            </div>
            <div className="col col-md-9">
                <label htmlFor="email">Email: </label>
                <input className="emailStyle" id="email" placeholder="Example@email.com" />
            </div>
        </>
    );
}

export default EmailComponent;