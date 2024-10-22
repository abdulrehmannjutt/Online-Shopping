import React from "react";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const features1 = [
    "10 promotion duplications per month",
    "50 automated reminders to affiliates via TikTok",
    "Customer support (Chat and Email)",
    "Scale as needed by credits",
  ];
  const features2 = [
    "50 promotion duplications per month",
    "100 automated reminders to affiliates via TikTok",
    "Customer support (Chat and Email)",
    "Scale as needed by credits",
  ];
  const features3 = [
    "200 promotion duplications per month",
    "500 automated reminders to affiliates via TikTok",
    "Customer support (Chat and Email)",
    "Scale as needed by credits",
  ];
  return (
    <>
      <section className="relative bg-blackBG text-white ">
        <img
          src="images/circlesL.png"
          alt="img"
          className="absolute top-0 right-0"
        />
        <img
          src="images/criclesR.png" 
          alt="img"
          className="absolute top-0 left-0"
        />
        <div className="flex justify-center items-center flex-col mt-[30px py-[104px]">
          <p className="font-oswald font-medium text-2xl leading-[35.57px] tracking-[0.2em] text-center]">
            Pricing
          </p>
          <p className="font-sourceSans font-semibold text-5xl leading-[60px] tracking-[-0.02em] text-center mt-[18px]">
            Plans that fit your scale
          </p>
          <p className="font-sourceSans font-normal text-2xl leading-[30px] text-center mt-5">
            Simple, transparent pricing that grow with you. Try any plan.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[18px] mt-[80px]">
          <PricingCard
            heading="Starter plan"
            headingParagraph="For small teams, offering up to 100 affiliates."
            icon="icons/starter.png"
            iconW={47.67}
            iconH={40.12}
            price={0}
            features={features1}
            btnMTop="60px"
          ></PricingCard>
          <PricingCard
            heading="Momentum plan"
            headingParagraph="Designed for growing teams, supporting up to 500 <br> affiliates."
            icon="icons/momentum.png"
            iconW={38.5}
            iconH={35}
            price={9.99}
            features={features2}
            btnMTop="30px"
          ></PricingCard>{" "}
          <PricingCard
            heading="Starter plan"
            headingParagraph="For small teams, offering up to 100 affiliates."
            icon="icons/heart.png"
            iconW={44.77}
            iconH={38.22}
            price={19.99}
            features={features3}
            btnMTop="30px"
          ></PricingCard>
        </div>

        <div className="flex flex-col justify-center items-center mt-[100px]">
          <p className="font-oswald font-semibold text-2xl leading-[35.57px] text-center">
            Scale your plan for every stage of growth
          </p>

          <div className="flex flex-wrap border border-[#828991] rounded-[20px] mt-[30px] py-10 px-[60px] gap-[30px]">
            <div className="flex flex-col">
              <p className="font-oswald font-semibold text-2xl leading-[35.57px] text-[#828991]">
                Cost per Credit
              </p>
              <p className="mt-[10px] font-sourceSansPro text-[32px] font-bold leading-[40.22px] text-left text-[#00BCD3]">
                1 Credit = $1
              </p>
              <button className="mt-[30px] mr-[102px] font-sourceSans font-semibold text-base leading-[20.11px] text-center text-[#151718] bg-[#00BCD3] border rounded-[60px] border-none px-5 py-[10px]">
                Get Started
              </button>
            </div>
            <div className="flex flex-col">
              <p className="font-oswald text-base font-medium leading-[23.71px] tracking-[0.15em] text-left">
                USAGE
              </p>

              <p className="mt-[20px] font-sourceSans text-base font-normal leading-[20.11px] text-left">
                1 Credit Include;
              </p>

              <ul className="mt-[10px] list-disc list-inside pl-3">
                <li className="font-sourceSansPro text-base font-normal leading-[20.11px] text-left mt-[8px]">
                  10 promotion duplications
                </li>
                <li className="font-sourceSansPro text-base font-normal leading-[20.11px] text-left mt-[8px]">
                  20 automated reminders
                </li>
                <li className="font-sourceSansPro text-base font-normal leading-[20.11px] text-left mt-[8px]">
                  Credits do not expire
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[80px]">
          <p>FAQ'S</p>
        </div>
      </section>
    </>
  );
};

export default Pricing;
