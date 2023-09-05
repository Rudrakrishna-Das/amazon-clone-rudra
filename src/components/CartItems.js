const CartItems = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="flex ">
        {/* IMAGE */}
        <div>
          <img className="w-20 h-36" src={item.image} alt={item.title} />
        </div>
        {/* NAME & DESCRIPTION */}
        <div className="mx-2">
          <div>
            <h1>
              {item.title} <span>X</span> {item.quantity}
            </h1>
          </div>
          <p className="text-xs">{item.description}</p>
        </div>
        {/* BUTTON */}
        <div>
          <button>Remove from cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
