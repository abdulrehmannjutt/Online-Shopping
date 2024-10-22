import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CommonButton from "../components/CommonButton";
import CommonInput from "../components/CommonInput";
import TextArea from "../components/TextArea";
import ChevronDown from "../../public/icons/ChevronDown"
import LocationIcon from "../../public/icons/LocationIcon";
import MailIcon from "../../public/icons/MailIcon";

const Contact = () => {
  const COUNTRIES_DATA = [
    { code: "US", name: "United States", dialCode: "+1" },
    { code: "GB", name: "United Kingdom", dialCode: "+44" },
    { code: "CA", name: "Canada", dialCode: "+1" },
    { code: "PK", name: "Pakistan", dialCode: "+92" },
  ];

  const [selectedCountry, setSelectedCountry] = useState("US");
  const [selectedDialCode, setSelectedDialCode] = useState("+1");
  const [isOpen, setIsOpen] = useState(false);

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <section className="overflow-x-hidden xl:p-0 p-5">
      <section className="flex justify-center items-center flex-col mt-[30px] py-10">
        <h1 className="font-oswald font-semibold text-2xl leading-[24px] text-center]">
          Contact us
        </h1>
        <h2 className="font-sourceSans font-semibold text-5xl leading-[60px] tracking-[-0.02em] text-center mt-[15px] text-blueBg">
          Get in touch
        </h2>
        <p className="font-sourceSans font-normal text-2xl leading-[30px] text-center mt-5">
          We’d love to hear from you. Please Fill out this form.
        </p>
      </section>

      <section className="relative m-[80px] px-10 flex justify-center p-5">
        {/* back div */}
        <div className="absolute top-[50px] lgb:left-[50px] laptopLargeB:left-[250px] fourK:left-[810px] right-[30px] bottom-[-30px] z-[1] lgb:block lgu:hidden laptopLargeB:block laptopLarge:hidden fourK:block fourKu:hidden hidden">
          <div className=" border rounded-[40px] border-[#828991] w-[700px] h-[630px]"></div>
        </div>

        <form
          className="relative z-10 border md:rounded-[40px] rounded-[20px] md:p-10 p-5 border-[#828991] bg-blackBG"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap gap-[15px]">
            <CommonInput
              label="First Name"
              placeholder="John"
              type="text"
              height="h-[50px]"
              width="w-[140px]"
              smHeight="md:h-[50px]"
              smWidth="md:w-[302.5px]"
              inputBg="bg-[#19222b]"
            />
            <CommonInput
              label="Last Name"
              placeholder="Doe"
              type="text"
              height="h-[50px]"
              width="w-[140px]"
              smHeight="md:h-[50px]"
              smWidth="md:w-[302.5px]"
              inputBg="bg-[#19222b]"
            />
          </div>
          <div className="">
            <CommonInput
              label="Email"
              placeholder="Enter your email here"
              type="email"
              height="h-[50px]"
              width="w-[295px]"
              smHeight="md:h-[50px]"
              smWidth="md:w-[620px]"
              inputBg="bg-[#19222b]"
            />
          </div>
          {/* phone no */}
          <div>
            <label
              className="font-sans text-[16px] font-normal text-white text-left leading-[20.11px] mb-[15px]"
              htmlFor="phoneNo"
            >
              Phone Number
            </label>
            <div className="flex mb-4 bg-[#19222b] md:w-[620px] w-[295px] h-[44px] rounded-[5px]">
              <div className="">
                <button
                  type="button"
                  className="font-sans font-normal text-base leading-[24px] p-[10px] pb-0 pl-[14px] gap-[5px] rounded-[5px] flex justify-center items-center bg-inputBg border-inputBg focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>{selectedCountry}</span>
                  <ChevronDown />
                </button>
                {isOpen && (
                  <ul className="absolute z-10 md:w-[620px] w-[295px] mt-[15px] bg-[#19222b] border border-disabled rounded-md shadow-lg focus:outline-none outline-none">
                    {COUNTRIES_DATA.map((country) => (
                      <li
                        key={country.code}
                        className="px-3 py-2 text-sm cursor-pointer hover:bg-hoverBg"
                        onClick={() => {
                          setSelectedCountry(country.code);
                          setSelectedDialCode(country.dialCode);
                          setIsOpen(false);
                        }}
                      >
                        {country.name} ({country.dialCode})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input
                type="tel"
                id="phoneNo"
                className="text-white bg-[#19222b] pl-0 md:w-[550px] w-[295px] p-[13px] leading-[24px] focus:outline-none rounded-[5px]"
                placeholder={`${selectedDialCode} (555) 000-0000`}
              />
            </div>
          </div>
          <div className="md:mb-[40px] mb-[20px]">
            <TextArea
              label="Message"
              placeholder="Leave us a message"
              smWidth="md:w-[620px]"
              smHeight="md:h-[176px]"
              width="w-[295px]"
              height="h-[117px]"
            />
          </div>
          <CommonButton text="Send Message" btnWidth="w-full" />
        </form>
      </section>

      <section className="flex justify-center mb-20">
        <div className="flex justify-center xl:gap-[20px] gap-[10px] items-center flex-wrap border-[0.5px] border-disabled rounded-[20px] bg-[#0D1520] xl:p-5">
          <div className="flex flex-col items-center gap-[10px] xl:w-[570px] h-[217px] w-[315px]">
            <MailIcon />
            <h2 className="font-oswald font-medium text-[32px] xl:leading-[47.42px] leading-[41.5px] text-center">
              Email
            </h2>

            <p className="border-b border-disabled font-sourceSans font-normal text-[32px] xl:leading-[40.22px] leading-[35.2px] text-center text-disabled">
              Ali@tikko.io
            </p>
          </div>
          <div className="w-[1px] h-[217px] bg-disabled xl:block hidden"></div>
          <div className="flex flex-col items-center gap-[10px] xl:w-[570px] xl:h-[217px]">
            <LocationIcon />

            <h2 className="font-oswald font-medium text-[32px] xl:leading-[47.42px] leading-[41.5px] text-center">
              Location
            </h2>

            <p className="font-sourceSans font-normal text-[32px] xl:leading-[40.22px] leading-[35.2px] text-center text-disabled">
              3839 McKinney Avenue, Suite 155 #2597 Dallas, TX 75204,
              UnitedStates
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
