import { useRouter } from "next/router";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

import Navigation from "@/components/Navigation";

const Success = () => {
  const router = useRouter();
  return (
    <section className="bg-gray-300 h-screen">
      <Navigation />
      <main className="max-w-screen-lg mx-auto relative top-36 rounded-md bg-white p-5 pl-7">
        <div className="flex space-x-2 mb-5">
          <CheckCircleIcon className="h-10 text-green-500" />{" "}
          <h1 className="text-3xl pt-1">
            Thank You! Your order has been confirmed
          </h1>{" "}
        </div>
        <p className="pb-4 text-sm">
          Thank you for shopping with us. We'll send you a confirmation once
          your item has shipped, if you would like tocheck the status of your
          order(s) please press the link below
        </p>

        <button onClick={() => router.push("/my-orders")} className="button">
          Go to my orders
        </button>
      </main>
    </section>
  );
};
export default Success;
