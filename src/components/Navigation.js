import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Navigation = () => {
  return (
    <nav>
      {/* TOP NAV */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* AMAZON_LOGO */}
        <div className="flex flex-grow pt-2 sm:flex-grow-0 ">
          <img
            src="https://links.papareact.com/f90"
            alt="amazon"
            className="cursor-pointer w-36 h-12 object-contain"
          />
        </div>
        {/* SEARCH_BAR */}
        <div className="hidden sm:flex sm:flex-grow h-9  bg-yellow-400 hover:bg-yellow-600 cursor-pointer rounded-md transition-all duration-500">
          <input
            type="text"
            className="flex flex-grow flex-shrink h-full rounded-l-md focus:outline-none p-1 tracking-wide"
          />
          <MagnifyingGlassIcon className="h-8 p-2" />
        </div>

        {/* DETAILS */}
        <div className="text-white flex items-center mx-2 text-xs space-x-6">
          <div className="link">
            <p>Hello Rudra</p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-extrabold">
              0
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:inline md:text-sm font-extrabold  items-center mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="flex items-center bg-amazon_blue-light text-white w-full p-2 pl-4 space-x-4 text-xs font-semibold">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 pr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime </p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </nav>
  );
};

export default Navigation;
