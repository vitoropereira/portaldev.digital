import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { useEffect, useState } from "react";
import { EmptyMyPoolList } from "../../../../components/EmptyMyPoolList";
import { Guesses } from "../../../../components/Guesses";
import { Loading } from "../../../../components/Loading";
import Navbar from "../../../../components/Navbar";
import { Option } from "../../../../components/Option";
import { PoolCardPros } from "../../../../components/PoolCard";
import { PoolHeader } from "../../../../components/PoolHeader";
import { api } from "../../../../lib/api";
import { toastNotification } from "../../../../utils/toast";

import styles from "./post.module.scss";

interface props {
  code: string;
}

export default function Post({ code }: props) {
  const [optionsSelected, setOptionsSelected] = useState<"guesses" | "ranking">(
    "guesses"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [poolDetails, setPoolDetails] = useState<PoolCardPros>(
    {} as PoolCardPros
  );

  const notification = toastNotification();

  async function fetchPoolsDetails() {
    try {
      const response = await api.get(`/pool/${code}`);
      setPoolDetails(response.data.pool);
    } catch (error) {
      return notification.notifyError(
        "Não foi possível carregar os detalhes bolões."
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPoolsDetails();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Head>
        <title> | portal dev</title>
      </Head>

      <div className="bg-gray-900">
        {poolDetails._count.participants > 0 ? (
          <div className="px-5">
            <PoolHeader data={poolDetails} />

            <div className="bg-gray-700 flex justify-around items-center h-12 rounded-sm mb-5 p-1">
              <Option
                title="Seus palpites"
                isSelected={optionsSelected === "guesses"}
                onClick={() => setOptionsSelected("guesses")}
              />
              <Option
                title="Ranking do grupo"
                isSelected={optionsSelected === "ranking"}
                onClick={() => setOptionsSelected("ranking")}
              />
            </div>

            <Guesses poolId={poolDetails.id} />
          </div>
        ) : (
          <EmptyMyPoolList code={poolDetails.code} />
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { poolCode } = params;

  return {
    props: {
      code: poolCode,
    },
  };
};
