import HomeCards from "./HomeCards";

function Categories() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-10 mx-auto">
        <h2 className="text-5xl mb-10 font-medium text-smokyblack">
          Top Categories
        </h2>
        <div className="flex flex-wrap -m-4 ">
          <HomeCards
            img="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            imgDimensions = "lg:h-48 md:h-36 object-center"
            title="Men's Clothing"
            paragraph="Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat."
            bgColor="bg-whity"
          ></HomeCards>
          <HomeCards
            img="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            imgDimensions = "lg:h-48 md:h-36 object-center"
            title="Electronics"
            paragraph="Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat."
            bgColor="bg-whity"
          ></HomeCards>
          <HomeCards
            img="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            imgDimensions = "lg:h-48 md:h-36 object-center"
            title="Women's Clothing"
            paragraph="Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat."
            bgColor="bg-whity"
          ></HomeCards>
        </div>
      </div>
    </section>
  );
}

export default Categories;
