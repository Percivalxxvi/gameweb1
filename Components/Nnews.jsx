// import React from 'react'
// import "./Nnews.css"
// import clock from "../src/assets/clock.png"
// import openfile from "../src/assets/openfile.png"

// const Nnews = ({image,txt,date,plat}) => {
//   return (
//     <div className='nnews'>
//         <div className='nnews-txt'>
//             <h1>{txt}</h1>
//             <div className='nnews-info'>
//             <div className='clk-div0'>
//                 <div className='clk-div'>
//                     <img src={clock} alt="" />
//                 </div>
//                 <p>{date}</p>
//             </div>
//             <div className='fldr-div0'>
//                 <div className='fldr-div'>
//                     <img src={openfile} alt="" />
//                 </div>
//                 <p>{plat}</p>
//             </div>
//         </div>
//         </div>
         
//         <img className='bg' src={image}alt="" />
        
//     </div>
//   )
// }

// export default Nnews


import React from "react";
import clock from "../src/assets/clock.png";
import openfile from "../src/assets/openfile.png";

const Nnews = ({ image, txt, date, plat }) => {
  return (
    <div className="relative lg:flex flex-col hidden items-center justify-end w-[350px] h-[500px] overflow-hidden bg-purple-600 transition-all duration-500">
      {/* Background image */}
      <img
        src={image}
        alt="news"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-125 hover:-rotate-3 cursor-pointer"
      />

      {/* Gradient overlay with text */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(3,1,12,0.9)] to-[rgba(154,154,155,0.05)] text-white px-4 py-3 flex flex-col gap-3 transition-all duration-500">
        <h1 className="text-[20px] text-left font-semibold">{txt}</h1>

        {/* Info section */}
        <div className="flex items-center justify-start gap-4 text-xs">
          {/* Date */}
          <div className="flex items-center gap-1">
            <img
              src={clock}
              alt="clock icon"
              className="w-3 h-3 object-contain"
            />
            <p>{date}</p>
          </div>

          {/* Platform */}
          <div className="flex items-center gap-1">
            <img
              src={openfile}
              alt="folder icon"
              className="w-3 h-3 object-contain"
            />
            <p>{plat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nnews;
