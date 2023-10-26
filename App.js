import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import Body from "./Body";
const root = ReactDOM.createRoot(document.getElementById("root"));





const App = ()=>{   
    return(
    <div className="app">
        <Header />
        <Body/>
    </div>);
    
}


root.render(<App />)