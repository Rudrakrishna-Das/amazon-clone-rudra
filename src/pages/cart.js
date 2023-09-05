import { useSelector } from "react-redux";
import { selectItems } from "@/slices/cartSlice";
import Navigation from "../components/Navigation";
import CartItems from "../components/CartItems";

const Cart = () => {
  const items = useSelector(selectItems);
  return (
    <section className="bg-gray-300">
      <Navigation />
      <main className="lg:flex max w-screen-xl mx-auto pt-28">
        {/* LEFT SIDE */}
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://theminimillionaire.com/wp-content/uploads/2019/12/us_evergreen_gw_dt_hero_1500x300_en-1440x288.jpg.webp"
            width={1020}
            height={250}
            objectfit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            {items.length === 0 ? (
              <h1 className="text-3xl text-center pb-4">
                Your Amazon Cart is empty
              </h1>
            ) : (
              <>
                <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
                {items.map((item) => (
                  <CartItems key={item.id} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
        {/* RIGHT SIODE */}
        <div></div>
      </main>
    </section>
  );
};

export default Cart;
