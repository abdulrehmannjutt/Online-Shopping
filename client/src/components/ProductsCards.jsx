import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { toast } from "react-toastify";

function ProductsCards({
  
  productId = null,
  productImg = "https://dummyimage.com/420x260",
  category = "CATEGORY",
  title = "Title",
  price = "$0.00",
  description = "Your perfect pack for everyday use and walks in the forest.",
  rating = 4.9,
  reviews = 100,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notify = () => {
    toast("Item Added");
  };

  return (
    <div className="lg:w-1/4 m  d:w-1/2 p-4 w-full flex flex-col justify-between items-center m-2  mr-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        width={"200"}
        height={"200"}
        src={productImg}
        alt="product"
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
            {category}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {title}
        </p>
        <p className="hover:text-blueish text-lg font-bold cursor-pointer">
          ${price}
        </p>
        <div className="flex gap-2"> 
          {/* i want to set that div at the end of the conatiner */}
          <button
            onClick={() =>
              navigate("/singleproduct", {
                state: {
                  productId,
                  productImg,
                  category,
                  title,
                  price,
                  description,
                  rating,
                  reviews,
                },
              })
            }
            href="#"
            className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blueish rounded-lg hover:bg-smokyblack focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              // dispatch(increment());
              dispatch(
                addToCart({
                  productId: productId,
                  productImg: productImg,
                  category: category,
                  title: title,
                  price: price,
                  quantity: 1
                })
              );
              notify()
            }}
            className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blueish rounded-lg hover:bg-smokyblack focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition ease-in duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
