import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { stripe } from "../services/stripe";

import avatar from "../../public/images/avatar.svg";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Header />
      <Head>
        <title>Home | portal dev</title>
      </Head>
      <div className="container mx-auto my-2">
        <div className="row">
          <div className="col-md-6 mx-auto my-auto">
            <span className="text-lg md:text-2xl">👏 Olá, bem vindo!</span>
            <h1>
              Blog do <span className="primary">portal dev</span>.
            </h1>

            <p>
              Do básico ao avançado na programação você encontrará por aqui.
            </p>
          </div>
          <div className="col-md-6 mx-auto my-auto">
            <Image
              className="mx-auto flex align-middle justify-center img-fluid"
              src={avatar}
              alt="Girl coding"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1IerWTCuOWI61DOsubMYaA1x", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
