import React from "react";
import Login from "./Login";
import Signup from "./Signup";

var isLoggedIn = true;

function App() {
    return (<div className="container">
        {/* {isLoggedIn ? <h1>Hello World!</h1> : <Login />} */}

        {isLoggedIn ? <Login /> : <Signup />}

    </div>
    );
}

export default App;
