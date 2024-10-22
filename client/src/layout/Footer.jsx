import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-gray-600 bg-white body-font">
      <div className="footer-div-1 container px-5 mx-auto flex justify-center items-center md:justify-start md:items-start lg:justify-center lg:items-center">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-bold items-center md:justify-start justify-center text-gray-900">
            <img src="/images/logo.png" alt="logo" />
          </a>
          
        </div>
        <div className="footer-div-1-1 flex-grow flex flex-wrap gap-28 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              LOCATION
            </h2>
            <nav className="list-none mb-10">
            <li className="cursor-pointer hover:text-blueish">
                <i className="fa-solid fa-location-dot"></i>
                <Link to={"/contact"} className="text-gray-600 hover:text-blueish cursor-pointer ml-2">10 Maves Avenue, 4114 Queensland, Australia.</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              PHONE
            </h2>
            <nav className="list-none mb-10">
            <li className="cursor-pointer hover:text-blueish">
                <i className="fa-solid fa-phone"></i>
                <Link to={"/contact"} className="text-gray-600 hover:text-blueish cursor-pointer ml-2">+61 402 198 623</Link>
              </li>
             
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              EMAIL
            </h2>
            <nav className="list-none mb-10">
              <li className="cursor-pointer hover:text-blueish">
                <i className="fa-solid fa-envelope"></i>
                <Link to={"/contact"} className="text-gray-600 hover:text-blueish ml-2">shirazi@gmail.com</Link>
              </li>
              
            </nav>
          </div>
        
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 font-bold text-sm text-center sm:text-left hover:text-blueish">
            © 1998 - {new Date().getFullYear()} Online Shopping
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link to={"/contact"} className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 cursor-pointer hover:text-blueish"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link to={"/contact"} className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 cursor-pointer hover:text-blueish"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link to={"/contact"} className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 cursor-pointer hover:text-blueish"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
            <Link to={"/contact"} className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5 cursor-pointer hover:text-blueish"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
