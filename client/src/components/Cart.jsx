import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  togglePopUpCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart/cartSlice";

function Cart() {
  const isPopCartVisible = useSelector((state) => state.cart.popUpCartVisible);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPopCartVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPopCartVisible]);

  return (
    <>
      {isPopCartVisible && (
  <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    
    {/* Backdrop to close the cart */}
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-20"
      aria-hidden="true"
      onClick={() => dispatch(togglePopUpCart())}
    />
    
    {/* Cart Content */}
    <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 z-30">
      <div className="pointer-events-auto w-screen max-w-md">
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                Shopping cart
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => dispatch(togglePopUpCart())} // Close popup on click
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.length > 0? cartItems.filter((item) => item.quantity > 0).map((item, index) => (
                    <li className="flex py-6" key={index}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.productImg} alt={item.title} className="h-full w-full object-contain" />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                          <h3 className="uppercase">
                            <a href="#">{item.title}</a>
                          </h3>
                          <p className="ml-4">${item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 uppercase">{item.category}</p>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <button
                            onClick={() => dispatch(decrementQuantity(item.productId))}
                            className="bg-smokyblack text-white px-2 rounded hover:bg-blueish"
                          >
                            -
                          </button>
                          <p className="text-gray-500">Qty {item.quantity}</p>
                          <button
                            onClick={() => dispatch(incrementQuantity(item.productId))}
                            className="bg-smokyblack text-white px-2 rounded hover:bg-blueish"
                          >
                            +
                          </button>
                          <div className="flex">
                            <button
                              onClick={() => dispatch(removeFromCart(item.productId))}
                              className="font-medium text-blueish hover:text-smokyblack"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  )):         
                  <div className="flex justify-center items-center mt-10">
                    <p>You don't have any items in your cart.</p>
                  </div>
                  }
                </ul>
              </div>
            </div>
          </div>

          {/* Cart Footer */}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <a className="flex items-center justify-center rounded-md bg-blueish px-6 py-3 text-white hover:bg-smokyblack">
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <button
                className="font-medium text-blueish hover:text-smokyblack"
                onClick={() => dispatch(togglePopUpCart())}
              >
                Continue Shopping →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}

export default Cart;
