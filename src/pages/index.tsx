import { GetStaticProps } from "next";
import Head from "next/head";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | portal dev</title>
      </Head>
      <div className="container mx-auto">
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
            <img
              className="mx-auto flex justify-center"
              src="/images/avatar.svg"
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
