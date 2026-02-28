import { useState } from 'react'
import './App.css'
import Login from './Login';
import Model from './Model';
import Home from './Home';
import Work from './Work';
import Domain from './Domain';
import Dynamic from './Dynamic';


function App() {

  // const obj ={
  //   name : "Niranjan",
  //   rollno : 21,
  //   dept : "IT"
  // }

  // const arr =[1,2,3,4,5,6]

  // const arrobj =[
  //   {name : "tamil" ,
  //     rollno : 110,
  //     dept : "it"
  //   },
  //   {
  //     name : "kishore",
  //     rollno : "85",
  //     dept : "cse"
  //   },
  //   {
  //     name : "babu",
  //     rollno : 12,
  //     dept : "aids"
  //   },
  //   {
  //     name : "dk",
  //     rollno : 16,
  //     dept :"aiml"
  //   }
  // ]
  return (
      <div>
       {/* <Work test={obj} mode1={arr} mode2={arrobj} completed="false"/> */}

       
       <Domain />
      </div>
    
  );
}
export default App;

