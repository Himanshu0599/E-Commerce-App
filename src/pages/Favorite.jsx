import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { SEO, TitleCard } from "../components";
import TitleCard from "../components/Card/TitleCard";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import { removeFavoriteItem } from "../redux/favReducer";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.fav.clothes);

  return (
    <>
      <main className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
        <TitleCard title="Your Wishlist" />
        <section className="w-full h-full flex flex-wrap items-center gap-10">
          {products.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-5">
              <GiShoppingBag className="text-7xl text-violet-500" />
              <article className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-medium font-serif">
                  Hey, It feels so light!
                </h3>
                <p className="text-gray-400 text-xs font-serif">
                  There is nothing in your wishlist
                </p>
              </article>
              <button className="text-white bg-violet-500 px-6 py-2 font-normal rounded font-serif">
                Add Products
              </button>
            </div>
          ) : (
            products?.map((item) => (
              <section
                key={item.id}
                className="w-[282px] h-[440px] flex flex-col items-start justify-start gap-2 rounded cursor-pointer"
              >
                <div className="w-full h-[370px] relative overflow-hidden rounded">
                  <section
                    className="w-[282px] h-[370px] object-cover object-center rounded overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out"
                    onClick={() => {
                      scroll.scrollToTop({
                        duration: 500,
                        smooth: true,
                      });
                      navigate(`/product/${item.id}`);
                    }}
                  >
                    <LazyLoadImage
                      alt="Your Image"
                      effect="blur"
                      src={item.img}
                      className="w-full h-full object-cover object-center rounded"
                    />
                  </section>
                  <section className="absolute top-5 right-5 bg-white rounded-full p-1">
                    <MdOutlineFavorite
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        dispatch(removeFavoriteItem(item.id));
                      }}
                    />
                  </section>
                  {item.isNew && (
                    <div className="absolute top-3 left-0 bg-[#f95e7f] text-white w-8 h-5 flex items-center justify-center">
                      <p className="capitalize text-sm font-medium font-serif">new</p>
                    </div>
                  )}
                </div>
                <article className="w-full flex items-start gap-1">
                  <div className="w-full flex flex-col">
                    <h1
                      className="text-base font-medium font-serif text-black"
                      onClick={() => {
                        scroll.scrollToTop({
                          duration: 500,
                          smooth: true,
                        });
                        navigate(`/product/${item.id}`);
                      }}
                    >
                      {item.title}
                    </h1>
                    <p className="text-gray-400 text-xs font-serif lg:text-sm capitalize">
                      {item.brand}
                    </p>
                  </div>
                   <p>₹{item.price}</p> 
                </article>
                
              </section>
            ))
          )}
        </section>
      </main>
    </>
  );
};

export default Favorite;
