import CommonButton from "./CommonButton";
import React from "react";


const PricingCard = ({
  heading,
  icon,
  iconW,
  iconH,
  headingParagraph,
  price,
  features,
  btnMTop
}) => {
  return (
    <>
      <div
        className="border border-none rounded-[20px] p-[30px] bg-[#FFFFFF1A] w-[468px] h-[535px] min-w-[340px]"
        style={{
          boxShadow: "16px 21px 12.1px 0px rgba(120, 0, 211, 0.47)",
        }}
      >
        <div className="flex justify-between items-start ">
          <div>
            <h3 className="font-oswald font-semibold text-2xl leading-[35.57px] text-left">
              {heading}
            </h3>
            <p
              className="font-sourceSans font-normal leading-[20.11px] text-left text-[#828991] mt-1"
              dangerouslySetInnerHTML={{ __html: headingParagraph }}
            ></p>
          </div>
          <div>
            <img src={icon} alt="icon" width={iconW} height={iconH} />
          </div>
        </div>
        <div className="flex items-baseline mt-[10px]">
          <p className="font-sourceSans font-bold text-[80px] leading-[100.56px] text-[#00BCD3]">
            ${price}
          </p>
          <span className="font-sourceSans font-semibold text-5xl leading-[60.34px]">
            &nbsp;
          </span>
          <p className="font-sourceSans font-semibold text-base leading-[20.11px]">
            Per Month
          </p>
        </div>
        <div className="card-features mt-[30px]">
          <p className="font-oswald font-medium text-base leading-[23.71px] tracking-[0.15em] text-left">
            FEATURES
          </p>
          <ul>
            {features.map((feature, index) => (
              <li
                key={index}
                className="font-sourceSans font-normal text-base leading-[20.11px] mt-[20px] flex items-center"
              >
                <img
                  src="icons/check.png"
                  alt="Check icon"
                  className="mr-[5px]"
                  width={18.18}
                  height={20}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: btnMTop}}>
        <CommonButton text="Get Started" />
        </div>
      </div>
    </>
  );
};

export default PricingCard;
