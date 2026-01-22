import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (props) => {
    console.log(props);
    
  return (
          <div className="w-[300px] bg-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
        
        {/* Top */}
        <div className="flex items-center justify-between">
          <img
            className="w-8 h-8 rounded-full border border-[#dadada]"
            src={props.image}
            alt="Amazon Logo"
          />
          <button className="flex items-center gap-[3px] py-1 px-2 border border-[#dadada] rounded-[5px] text-[#b1b1b1] text-[13px] bg-transparent">
            Save <Bookmark size={14} className="mt-[2px]" />
          </button>
        </div>

        {/* Center */}
        <div className="mt-4">
          <h3 className="text-[17px] font-medium">
            {props.company}{" "}
            <span className="text-[9px] font-normal text-[#8b8b8b]">
             {props.posted}
            </span>
          </h3>
          <h2 className="text-[18px] font-medium mt-1">
            {props.role}
          </h2>

          <div className="flex gap-2 mt-3">
            <span className="text-[12px] font-medium bg-[#dadada] text-[#111] py-[3px] px-[6px] rounded">
              {props.jobType}
            </span>
            <span className="text-[12px] font-medium bg-[#dadada] text-[#111] py-[3px] px-[6px] rounded">
              {props.level}
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-t-[#b1b1b1] pt-3 mt-4">
          <div>
            <h3 className="text-[17px] font-medium">{props.pay}</h3>
            <p className="text-[12px] text-[#8b8b8b]">{props.location}</p>
          </div>
          <button className="bg-black text-white py-1 px-3 rounded-[5px] font-semibold">
            Apply Now
          </button>
        </div>
      </div>                    
  )
}

export default Card
