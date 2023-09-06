import { addToCart, removeFromCart } from "@/slices/cartSlice";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const starRating = Array(item.rating)
    .fill()
    .map((_, i) => (
      <StarIcon
        key={i}
        className="h-5 text-yellow-500"
        suppressHydrationWarning
      />
    ));

  let currencyIND = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  const increaseCartItem = () => {
    const product = {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      rating: item.rating,
      hasPrime: item.hasPrime,
    };

    dispatch(addToCart(product));
  };
  const removeItem = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  return (
    <div className="grid grid-cols-5 pb-2 border-b-2">
      {/* IMAGE */}
      <div>
        <img
          className="w-40 h-40 object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>
      {/* NAME & DESCRIPTION */}
      <div className="col-span-3 mx-5">
        <div className="flex justify-between">
          <p>{item.title}</p>
          <div className="flex font-extrabold text-lg">
            <p>X</p>
            <p>{item.quantity}</p>
          </div>
        </div>
        <div className="flex">{starRating}</div>
        <p className="text-xs my-2 line-clamp-3">{item.description}</p>
        <div>{currencyIND.format(item.price)}</div>
        {item.hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://www.logolynx.com/images/logolynx/2d/2db930aff3263f71c4bd392aaa3741f7.png"
              alt="prime-logo"
              loading="lazy"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* BUTTON */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          className="my-1 button hover:to-yellow-500"
          onClick={increaseCartItem}
        >
          Add to cart
        </button>
        <button
          className="my-1 button hover:to-yellow-500"
          onClick={removeItem}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;
