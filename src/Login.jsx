import React from "react";
import './Login.css';

const Login = () => {
    return (<>
    <center>
        <div  className="main">
            <div className="signin">
            <h1>sign in with E-mail</h1>
            </div>
            <p>Make a database with json document with this login page
            </p>
            <form className="form_correction">
                <input type="email" placeholder="E-mail ID"/>
                <br />
                <input type="password" placeholder="Password" /><br />
                <div className="correction">
                  <a href ="https://www.w3schools.com" className="forget">Forget password.....</a>
                  <button type ="submit">Login</button>
                </div>
            </form>

        </div></center>
        </>
    );
}

export default Login;