import React from "react";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {addToCart } from "../redux/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Cart from "../components/Cart";

function SingleProduct() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems)
  console.log("signle product", cartItems);
  
  const location = useLocation();
  const { productId, productImg, category, title, price, description, rating, reviews } =
    location.state || {};

  const notify = () => {
    toast("Item Added");
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 flex justify-between flex-wrap">
          <img
            alt="ecommerce"
            width={"400"}
            className="lg:h-auto h-64 object-cover object-center rounded mix-blend-multiply"
            src={productImg}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-blueish"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-blueish"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-blueish"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-blueish"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-blueish"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">{rating}</span>
              </span>

              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-600">{reviews} Sold out</a>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <button
                onClick={() => {
                  dispatch(increment());
                  dispatch(addToCart({productId: productId, productImg: productImg, category: category , title: title , price: price, quantity: 1 }));
                  notify()
                }}
                className="flex ml-auto text-white bg-blueish border-0 py-2 px-6 focus:outline-none hover:bg-smokyblack rounded"
              >
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Cart/>
      </div>
    </section>
  );
}

export default SingleProduct;
