import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            width={"385px"}
            src="/images/hero.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Do you need a special
            <br className="hidden lg:inline-block" />
            product for you?
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            <br className="hidden lg:inline-block" />
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            <br className="hidden lg:inline-block" />
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            <br className="hidden lg:inline-block" />
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link to={"/contact"} className="inline-flex text-whity bg-blueish border-0 py-2 px-6 focus:outline-none hover:bg-smokyblack rounded text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
