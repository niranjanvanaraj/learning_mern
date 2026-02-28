import React from "react";
import { useState } from "react";
import './Home.css';

const Home =() =>{

    // const [num,setNum] = useState(1);
    // const [value,setValue] = useState(100);
    // function Increment(){
    //     setNum(num+1);
    // }
    // function Decrement(){
    //     setValue(value-1);
    // }
    const [count,setCount] = useState(true);
    function change(){
        setCount(!count);
    }
    return(
        <div>
            <h1>Model program</h1>
            <div className="Counter">
                <h2>{count ? "true" : "false"}</h2>
                <div className={count ? "box_white" : "box_dark"}>

                </div>
                <button onClick={change} className="btn_cntr">change colour</button>
            </div>
            {/*<div className="number">
            <h1>{num}</h1>
            <h1>{value}</h1></div>
             <button type="submit " onClick={Increment}>Increase</button>
            <button type="submit" onClick={Decrement}>Decrease</button> */}
        </div>
    );
}

export default Home;