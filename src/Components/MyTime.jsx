import React, { useState } from "react";
import "./MyTime.css"
 

const MyTime = () => {
  const [t, setT] = useState(0);
  //settimeout & setinterval
//   setInterval(() => {
//      (prev)+ setT((t)+1);
//   }, 1000);

setTimeout(() => {
    setT(t+1);
}, 1000);
  return <h1 className="time">===={t}</h1>;
};

export default MyTime;
