import Head from "next/head";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import ProductsFeed from "../components/ProductsFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Navigation />
      <main className="max-w-screen-xl mx-auto">
        {/* BANNER */}
        <Banner />
        {/* PRODUCTS */}
        <ProductsFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("https://fakestoreapi.com/products");

  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}