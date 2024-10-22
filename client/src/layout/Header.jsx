import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { togglePopUpCart } from "../redux/cart/cartSlice";
import { useEffect, useState } from "react";

function Header() {
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

  const userStatus = localStorage.getItem("userData");
  const parsedUserStatus = userStatus ? JSON.parse(userStatus) : null;

  useEffect(() => {
    if (parsedUserStatus?.isAdmin) {
      setAdmin(parsedUserStatus.isAdmin);
    } else {
      setAdmin(false);
    }
  }, [parsedUserStatus]);

  // const userInfo = userStatus ? true: false;

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
    setAdmin(false);
  };

  return (
    <header className="sticky top-0 right-0 bottom-0 z-10">
      <nav className="bg-smokyblack dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse logo"
          >
            <img src="/images/logo.png" className="w-[9rem]" alt="UIC Logo" />
          </a>
          <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* cart */}

            {userStatus ? (
              <div className="flex justify-center items-center">
                {admin === true ? (
                  " "
                ) : (
                  <div
                    className="relative right-5 cursor-pointer"
                    onClick={() => dispatch(togglePopUpCart())}
                  >
                    <div className="t-0 absolute left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        {cartCount}
                      </p>
                    </div>
                    <svg
                      style={{ color: "white" }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="file: mt-4 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                )}
                <div className="text-white">
                  <button
                    onClick={handleLogout}
                    className="uppercase text-white bg-blueish hover:bg-whity hover:text-smokyblack transition ease-in duration-200  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-whity dark:hover:bg-whity "
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  type="button"
                  className="uppercase text-white bg-blueish hover:bg-whity hover:text-smokyblack transition ease-in duration-200  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-whity dark:hover:bg-whity "
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  type="button"
                  className="text-white uppercase bg-blueish  hover:bg-whity hover:text-smokyblack transition ease-in duration-200  font-medium rounded-lg text-sm px-4 py-2 text-center dark:hover:bg-whity "
                >
                  SignUp
                </button>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 gap-10 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-whity bg-blueish rounded md:bg-transparent md:p-0 border-b-2 border-smokyblack hover:border-blueish"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="block py-2 px-3 text-whity bg-blueish rounded md:bg-transparent md:p-0 border-b-2 border-smokyblack hover:border-blueish"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="block py-2 px-3 text-whity bg-blueish rounded md:bg-transparent md:p-0 border-b-2 border-smokyblack hover:border-blueish "
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="block py-2 px-3 text-whity bg-blueish rounded md:bg-transparent md:p-0 border-b-2 border-smokyblack hover:border-blueish"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/pricing"}
                  className="block py-2 px-3 text-whity bg-blueish rounded md:bg-transparent md:p-0 border-b-2 border-smokyblack hover:border-blueish"
                >
                  Pricing
                </Link>
              </li>
             
              {admin && (
                <li>
                  <Link
                    to={"/admin"}
                    className="block py-2 px-3 text-whity bg-blueish rounded md:bg-transparent md:p-0 border-b-2 border-smokyblack hover:border-blueish"
                  >
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
