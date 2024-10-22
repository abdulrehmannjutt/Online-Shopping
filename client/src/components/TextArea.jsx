import React from "react";
 
const TextArea = ({ label, name, text, placeholder, smWidth, smHeight ,width, height }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label 
      htmlFor={label}
      className="font-sans text-[16px] font-normal text-white text-left leading-[20.11px]">
        {label}
      </label>
        <textarea
          id={label}
          name={name}
          className={`rounded-[5px] bg-inputBg leading-[24px] text-base
          font-normal font-sourceSans text-white p-[15px] gap-[10px] resize-none border-none focus:outline-none focus:ring-0
          ${height}
          ${width}
          ${smWidth}
          ${smHeight}`}
          placeholder={placeholder}
          value={text}
        ></textarea>
    </div>
  );
};
 
export default TextArea;