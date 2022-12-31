import React from "react";
import Input from "./Input";


function Signup() {
    return (<div>
        <h2>Enter your credentials</h2>
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default Signup;