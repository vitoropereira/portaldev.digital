import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";

import avatar from "../../public/images/avatar.svg";
import developer1 from "../../public/images/developer1.jpg";
import developer2 from "../../public/images/developer2.jpg";
import developer3 from "../../public/images/developer3.jpg";
import Cards from "../components/Cards";

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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-rows-1 items-center mt-6 mx-auto">
            <div>
              <span className="text-4xl md:text-7xl">👏 Olá, bem vindo!</span>
              <h1 className="text-2xl md:text-4xl pl-10 mt-3">
                Blog do <span className="text-rose-600">portal dev</span>.
              </h1>
              <p className="text-1xl md:text-2xl pl-10 mt-3">
                Do básico ao avançado na programação você encontrará por aqui.
              </p>
            </div>
          </div>
          <div className="mx-auto py-4">
            <Image
              className="mx-auto flex align-middle justify-center img-fluid"
              src={avatar}
              alt="Girl coding"
            />
          </div>
        </div>
      </div>

      <div className="text-2xl md:text-4xl pl-10 mt-3">
        <h1>Blog </h1>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Cards
          srcImage={developer2}
          title="River"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil."
          tags={[
            "#photography",
            " #travel",
            "#summer",
            "#photography",
            " #travel",
            "#summer",
          ]}
        />

        <div className="rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={developer2} alt="River" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-700 text-base"></p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={developer3} alt="Forest" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Forest</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
