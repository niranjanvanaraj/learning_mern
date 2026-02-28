import React from "react";
import './Model.css';

const Model = () => {
    return (<>
        <div>
            <h1>Create a new Account</h1>
            <div className="met">
                <h3>Already a Member?</h3>
            </div>
            <a href="#" className="intro">Sign in</a>
            
            <div>
                <div className="structure">
                    <div className="one">
                    <h5>if not a user</h5></div>
                    <input type="text" placeholder="Name" /><br />
                    <input type="email" placeholder="Email" /><br />
                    <input type="password" placeholder="Password" /><br />
                    <input type="password" placeholder="Confirm Password" /><br />
                </div>
            </div>
            <div className="check">
                <button type="submit">log in</button>
            </div>

        </div>
    </>
    )
}
export default Model;