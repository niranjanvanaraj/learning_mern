import React from "react";
import './Work.css';

const Work = (props) => {
    console.log(props.mode2[0])
    console.log(props.mode2[1])
    console.log(props.mode2[2])
    console.log(props.mode1)



    return (
        <>
        <h1>model page</h1>
        </>
    )
}

/*const Work = ({mode1}) =>{
   console.log(mode1.[0]);
   return(
       <div className="made">
       <h1>demo model</h1>
       <h5>{mode1}</h5>
       </ div>
   )
}*/

export default Work;