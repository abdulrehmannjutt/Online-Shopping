const CommonInput = ({ label, name, placeholder, type, inputBg ,height, width, smHeight, smWidth }) => {
    return (
      <div className={`flex flex-col gap-1 mb-4`}>
        <label
          htmlFor={label}
          className={`font-sans text-[16px] font-normal text-white text-left leading-[20.11px]`}
        >
          {label}
        </label>
        <input
          type={type}
          id={label}
          name={name}
          placeholder={placeholder}
          className={`p-[15px] gap-[10px] rounded-[5px] text-white border-none focus:outline-none focus:ring-0
            ${height ? height : "h-auto"}
            ${width ? width : "w-full"}
            ${smHeight ? smHeight : ""}
            ${smWidth ? smWidth : ""}
            ${inputBg}
          `}
        />
      </div>
    );
  };
  
  export default CommonInput;