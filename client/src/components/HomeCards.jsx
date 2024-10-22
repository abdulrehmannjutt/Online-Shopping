import { Link } from "react-router-dom";

function HomeCards({ img, imgDimensions, bgColor, title, paragraph }) {
  return (
    <Link to={"/products"} className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-center items-center bg-white">
        <img
          className={`${imgDimensions} ${bgColor} cursor-zoom-in transition duration-300 ease-in-out hover:scale-110`}
          src={img}
          alt="blog"
        />
        {title === undefined || paragraph === undefined ? (
          ""
        ) : (
          <div className="p-6 bg-whity">
            <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3">{paragraph}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default HomeCards;
