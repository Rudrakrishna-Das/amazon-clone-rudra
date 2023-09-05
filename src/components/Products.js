import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { addToCart } from "@/slices/cartSlice";

import { StarIcon } from "@heroicons/react/24/solid";

const Products = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState();
  const [hasPrime, setHasPrime] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setRating(Math.trunc(Math.random() * 5) + 1);
    setHasPrime(Math.random() < 0.5);
  }, []);

  let currencyIND = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  const starRating = Array(rating)
    .fill()
    .map((_, i) => (
      <StarIcon
        key={i}
        className="h-5 text-yellow-500"
        suppressHydrationWarning
      />
    ));

  const addItemsToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    dispatch(addToCart(product));
  };
  return (
    <div className="bg-white flex flex-col m-5 p-4 z-30">
      <p className="text-right text-xs italic text-gray-400">{category}</p>
      <img src={image} alt={title} className="h-28 mx-auto my-5" />
      <h4 className="my-4">{title}</h4>
      <div className="flex">{starRating}</div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">{currencyIND.format(price)}</div>
      {hasPrime && ( // Error Reason 2
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://www.logolynx.com/images/logolynx/2d/2db930aff3263f71c4bd392aaa3741f7.png"
            alt="prime-logo"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemsToCart} className="mt-auto button">
        Add To Cart
      </button>
    </div>
  );
};

export default Products;
