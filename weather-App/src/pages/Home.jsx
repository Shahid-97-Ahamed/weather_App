import { useState } from "react";

const Home = () => {
    const [click,setClick] =useState("");
    console.log(click)
    
    return (
      
<div className="w-full max-w-md p-8 text-center">

  <h1 className="text-4xl font-bold text-green-700">
    Weather App
  </h1>

  <p className="mt-3 text-md font-light  text-gray-500">
    Click your weather today
  </p>

  <button
  type="button"
   onClick={()=>setClick("click")}
    className="mt-6 rounded-lg bg-green-600 px-6 py-3
           font-bold text-white
           transition-all duration-300
           hover:bg-green-700
           hover:scale-105
           hover:shadow-lg
           active:scale-95"
 >
    Check Your Weather today 
  </button>

</div>


    );
};

export default Home;