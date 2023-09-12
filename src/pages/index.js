import Head from "next/head";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import ProductsFeed from "../components/ProductsFeed";
import { getSession } from "next-auth/react";

export default function Home({ products }) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Amazon 2.0</title>
        <link
          rel="shortcut icon"
          href="https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg"
        />
      </Head>
      <Navigation />
      <main className="max-w-screen-xl mx-auto pt-32">
        {/* BANNER */}
        <Banner />
        {/* PRODUCTS */}
        <ProductsFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const response = await fetch("https://fakestoreapi.com/products");

  const products = await response.json();

  return {
    props: {
      products,
      session,
    },
  };
}
