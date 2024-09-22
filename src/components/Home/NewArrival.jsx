// import TitleCard from "../Card/TitleCard"
// import ArrivalCard from "../Card/ArrivalCard"
// import { Newproducts } from "../Data/data"

// const NewArrival = () => {
//   const uniqueTag = new Set();
//   const uniqueProduct = Newproducts.filter((product) => {
//     if (uniqueTag.has(product.tag)) {
//       return false;
//     }
//     uniqueTag.add(product.tag);
//     return true;
//   });

//   return (
//     <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
//       <TitleCard title="New Arrival" />
//       <section className="w-full h-full flex flex-row gap-10 overflow-x-scroll"  style={{msOverflowStyle: 'none',scrollbarWidth: 'none',  }}>
//         {uniqueProduct?.map((product) => (
//           <main key={product.id}>
//             <ArrivalCard
//               img={product.img}
//               title={product.subtitle}
//               tag={product.tag}
//               category={product.category}
//             />
//           </main>
//         ))}
//       </section>
//     </section>
//   );
// }

// export default NewArrival;

import { useRef } from "react";
import TitleCard from "../Card/TitleCard";
import ArrivalCard from "../Card/ArrivalCard";
import { Newproducts } from "../Data/data";

const NewArrival = () => {
  const scrollRef = useRef(null); // Reference for the scrollable section

  // Function to scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const uniqueTag = new Set();
  const uniqueProduct = Newproducts.filter((product) => {
    if (uniqueTag.has(product.tag)) {
      return false;
    }
    uniqueTag.add(product.tag);
    return true;
  });

  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10 relative">
      <TitleCard title="New Arrival" />
      <div className="relative w-full h-full flex items-center">
        <button
          className="absolute left-0 z-10 bg-gray-300 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          onClick={scrollLeft}
        >
          &lt;
        </button>

        <section
          ref={scrollRef}
          className="w-full h-full flex flex-row gap-10 overflow-x-scroll"
          style={{
            msOverflowStyle: "none",  // Hide scrollbar for IE
            scrollbarWidth: "none",   // Hide scrollbar for Firefox
          }}
        >
          <style jsx>{`
            section::-webkit-scrollbar {
              display: none; // Hide scrollbar for Chrome/Safari
            }
          `}</style>
          {uniqueProduct?.map((product) => (
            <main key={product.id}>
              <ArrivalCard
                img={product.img}
                title={product.subtitle}
                tag={product.tag}
                category={product.category}
              />
            </main>
          ))}
        </section>
        <button
          className="absolute right-0 z-10 bg-gray-300 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default NewArrival;
