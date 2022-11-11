//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(() => {
    seconds = seconds+1;
    if(seconds==60){
        seconds=0;
        minutes = minutes+1;
    }
    if(minutes == 60){
        minutes=0;
        hours = hours+1;
    }
    ReactDOM.render(<Home hours ={hours} minutes={minutes} seconds={seconds} />, document.getElementById("app"));
  }, 10);
  

