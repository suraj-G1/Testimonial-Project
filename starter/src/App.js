import React from "react";
import Heading from "./Componentes/Heading";
import Testimonials from "./Componentes/Testimonials";
import reviews from "./data";
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-gray-200">
      
        <div>
          <Heading/>  
        </div>
        <div>
          <Testimonials reviews={reviews}/>
        </div>

      

    </div>
    
  )
};

export default App;
