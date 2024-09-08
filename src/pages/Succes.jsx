import { BsBagCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };
  return (
    <>
      <div className="content-wrapper flex items-center justify-center py-20">
        <section className="w-auto h-auto flex flex-col items-center justify-center gap-4">
          {/* <Canvas /> */}
          <BsBagCheckFill className="text-violet-500 w-10 h-10" />
          <h1 className="text-Primary text-4xl font-medium text-center font-serif">
            Thank You for Purchasing{" "}
          </h1>
          <p className="max-w-sm text-center text-gray-400 font-normal font-serif">
            We greatly appreciate your support. Your order is being processed
            and will be shipped to you soon.
          </p>
          <button
            className="bg-violet-500 text-white font-satoshi font-normal px-6 py-3 rounded font-serif"
            onClick={goToProducts}
          >
            Continue Shopping
          </button>
        </section>
      </div>
    </>
  );
};

export default Success;
