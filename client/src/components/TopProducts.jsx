import HomeCards from "./HomeCards";

function TopProducts() {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h2 className="text-5xl mb-10 font-medium text-smokyblack">
          Our Products
        </h2>

        <div className="flex flex-wrap -m-4 w-">
          <HomeCards
            img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            imgDimensions="h-[18rem] w-52 object-center"
          ></HomeCards>
          <HomeCards
            img="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            imgDimensions="h-[16rem] w-56 object-center"
          ></HomeCards>
          <HomeCards
            img="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            imgDimensions="h-[16rem] w-52 object-center"
          ></HomeCards>
        </div>
        <div className="flex flex-wrap -m-4">
          <HomeCards
            img="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
            imgDimensions="h-[16rem] w-64"
          ></HomeCards>
          <HomeCards
            img="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
            imgDimensions="h-[16rem] w-68 object-center"
          ></HomeCards>
          <HomeCards
            img="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
            imgDimensions="h-[18rem] w-48 object-cover object-center"
          ></HomeCards>
        </div>
      </div>
    </section>
  );
}

export default TopProducts;
