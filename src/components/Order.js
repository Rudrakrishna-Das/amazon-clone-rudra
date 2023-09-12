import moment from "moment";

const Order = ({ id, amount, amountShipping, images, items, timeStamp }) => {
  const currencyIND = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  const totalQuantity = items.reduce(
    (total, order) => (total += order.quantity),
    0
  );
  return (
    <section className="relative border rounded-md my-2">
      <div className="flex items-center space-x-10 p-5  bg-slate-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timeStamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            {currencyIND.format(amount)} - Next Day Delivery{" "}
            {currencyIND.format(amountShipping)}
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {totalQuantity} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img
              src={image}
              alt={image}
              className="h-20 object-contain sm:h-32"
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
};
export default Order;
