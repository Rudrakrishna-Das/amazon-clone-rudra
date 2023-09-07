import { useSelector } from "react-redux";
import { selectItems, totalCartValue } from "@/slices/cartSlice";
import Navigation from "../components/Navigation";
import CartItems from "../components/CartItems";
import { useSession } from "next-auth/react";

const Cart = () => {
  const items = useSelector(selectItems);
  const totalPrice = useSelector(totalCartValue);
  const { data: session, status } = useSession();

  let currencyIND = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
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
        {items.length > 0 && (
          <div className={"w-12/12 mx-5 bg-white p-4 text-right lg:w-full"}>
            <>
              <ul>
                {items.map((item) => (
                  <li
                    className="flex flex-col justify-between list-none mb-3 text-left"
                    key={item.id}
                  >
                    <div className="flex text-xs text-left mr-2 mt-1">
                      <p>{item.title}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">
                        ({item.quantity} X {currencyIND.format(item.price)})
                      </p>
                      <p>{currencyIND.format(item.quantity * item.price)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <hr />

              <div className="flex justify-between mt-1 text-left">
                <p>Total Price</p>
                <p>{currencyIND.format(totalPrice)}</p>
              </div>
              <button
                disabled={!session}
                className={`button mt-2 ${session && "hover:to-yellow-500"} ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 hover: cursor-not-allowed"
                }`}
              >
                {!session ? "Sighnin to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          </div>
        )}
      </main>
    </section>
  );
};

export default Cart;
