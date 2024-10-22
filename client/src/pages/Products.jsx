import React, { useEffect, useState } from "react";
import ProductsCards from "../components/ProductsCards";
import { TailSpin } from "react-loader-spinner";
import Cart from "../components/Cart";

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const allProductsApi = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  const categoriesApi = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    setCategories(data);
  };

  const filterByCategory = async (category) => {
    setLoading(true);
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    allProductsApi();
    categoriesApi();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <div className="flex">

        <aside
          id="default-sidebar"
          className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-auto px-5 py-24 overflow-y-auto dark:bg-gray-800">
            <h2 className="text-gray-900 font-bold uppercase mb-5">
              Categories
            </h2>
            <ul className="space-y-2 font-medium">
              {/* {categories} */}
              {categories.map((category, i) => {
                return (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blueish group hover:text-white uppercase"
                    >
                      <span
                        className="ms-3"
                        onClick={() => filterByCategory(category)}
                      >
                        {category}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <div className="container px-5 py-24 flex flex-wrap justify-center">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <TailSpin
                visible={true}
                height="100"
                width="100"
                color="#0173bc"
                ariaLabel="tail-spin-loading"
                radius="1"
              />
            </div>
          ) : (
            products.map((product) => (
              <ProductsCards
                productId={product.id}
                productImg={product.image}
                category={product.category}
                title={product.title.split(" ").slice(0, 3).join(" ")}
                price={product.price}
                description={product.description}
                rating={product.rating.rate}
                reviews={product.rating.count}
              />
            ))
          )}
        </div>
        <Cart/>
      </div>
    </section>
  );
}

export default Products;
