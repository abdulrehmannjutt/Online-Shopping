import React from "react";

const CommonButton = ({
  text,
  textColor = "text-[#151718]",
  bgColor,
  borderColor,
  marginTop,
  btnWidth,
  responsiveBtnWidth,
}) => {
  return (
    <button
      className={`font-sourceSans font-semibold text-base leading-[20.11px] text-center
        ${textColor}
        ${bgColor ? `bg-[${bgColor}]` : "bg-[#00BCD3]"} 
        ${borderColor ? `${borderColor} border` : "border-none"} 
        rounded-[60px] px-5 py-[10px]
        ${marginTop}
        ${btnWidth}
        ${responsiveBtnWidth}
        `}
    >
      {text}
    </button>
  );
};

export default CommonButton;
