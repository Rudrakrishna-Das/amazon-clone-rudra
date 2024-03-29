import Head from "next/head";

import { getSession, useSession } from "next-auth/react";

import Navigation from "@/components/Navigation";
import db from "../../firebase";
import moment from "moment/moment";
import Order from "@/components/Order";

const Orders = ({ orders }) => {
  const { data: session, status } = useSession();
  let totalOrders = orders
    .flatMap((order) => order.items)
    .reduce((total, order) => (total += order.quantity), 0);
  return (
    <>
      <Head>
        <title>Orders</title>
        <link
          rel="shortcut icon"
          href="https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg"
        />
      </Head>
      <Navigation />
      <section className="bg-gray-300 relative top-28  py-5 ">
        <main className="max-w-screen-lg mx-auto  rounded-md bg-white p-5 pl-7">
          <h1 className="text-3xl border-b-yellow-400 border-b pb-1">
            Your Orders
          </h1>
          {session ? (
            <h2> {totalOrders} Orders</h2>
          ) : (
            <h2> Please signin to see your orders</h2>
          )}
          {session && orders.length === 0 ? (
            <h2>No items you ordered!</h2>
          ) : (
            <div>
              {orders?.map(
                ({ id, amount, amountShipping, images, items, timeStamp }) => (
                  <Order
                    key={id}
                    id={id}
                    amount={amount}
                    amountShipping={amountShipping}
                    images={images}
                    items={items}
                    timeStamp={timeStamp}
                  />
                )
              )}
            </div>
          )}
        </main>
      </section>
    </>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  //Get users loggedin credentials...
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // FIREBASE DATABASE
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  //STRIPE ORDERS
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().image,
      timeStamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
      orders,
      session,
    },
  };
}
