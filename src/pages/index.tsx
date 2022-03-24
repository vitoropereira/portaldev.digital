import Head from "next/head";
import Image from "next/image";
import Prismic from "@prismicio/client";
import { Header } from "../components/Header";

import avatar from "../../public/images/avatar.svg";
import Cards from "../components/Cards";

import { getPrismicClient } from "../services/prismic";
import { RichText } from "prismic-dom";
import { useEffect, useState } from "react";

import developerImage from "../../public/images/developer1.jpg";
import { GetStaticProps } from "next";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

type Post = {
  uid: string;
  tags: string[];
  title: string;
  paragraph: string;
  image?: string;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Home({ posts }: PostsProps) {
  console.log(posts);
  return (
    <>
      <Header />
      <Head>
        <title>Home | portal dev</title>
      </Head>
      <div className="container mx-auto homeBackground">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="items-center mt-6 mx-auto">
            <div>
              <span className="text-2xl md:text-4xl">👏 Olá, bem vindo!</span>
              <h1 className="text-4xl md:text-7xl pl-10 mt-3">
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

        <div className="text-2xl md:text-4xl pl-10 mt-3">
          <h1>Posts </h1>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {posts.map((post) => {
            return (
              <Cards
                key={post.uid}
                image={{
                  src: post.image,
                  height: post.height,
                  width: post.width,
                }}
                title={post.title}
                paragraph={post.paragraph}
                tags={post.tags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "posts")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  const posts = response.results.map((post) => {
    return {
      uid: post.uid,
      slug: post.uid,
      title: RichText.asText(post.data.title),
      tags: post.tags,
      paragraph:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      image:
        post.data.content
          .find((content) => content.type === "image")
          ?.url.split("?")[0] ?? developerImage,
      width:
        post.data.content.find((content) => content.type === "image")
          ?.dimensions.width ?? 0,
      height:
        post.data.content.find((content) => content.type === "image")
          ?.dimensions.height ?? 0,
      createdAt: new Date(post.first_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: { posts },
  };
};
