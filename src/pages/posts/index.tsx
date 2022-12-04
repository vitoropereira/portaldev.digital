import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";

import { PostProps } from "../index";

interface PostsProps {
  post: PostProps;
}

export default function Posts({ post }: PostsProps) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Home | portal dev</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href={`/posts/${post.slug}`}>
            <div className="flex flex-row cursor-pointer">
              <div className="w-32 md:w-1/4 px-2 inline-block align-middle"></div>
              <a className="w-64 md:w-full" key={post.slug}>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post}</p>
              </a>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const response = await prismic.query(
  //   [Prismic.predicates.at("document.type", "posts")],
  //   {
  //     fetch: ["publication.title", "publication.content"],
  //     pageSize: 100,
  //   }
  // );

  // const posts = response.results.map((post) => {
  //   return {
  //     slug: post.uid,
  //     title: RichText.asText(post.data.title),
  //     excerpt:
  //       post.data.content.find((content) => content.type === "paragraph")
  //         ?.text ?? "",
  //     image:
  //       post.data.content
  //         .find((content) => content.type === "image")
  //         ?.url.split("?")[0] ?? developerImage,
  //     width:
  //       post.data.content.find((content) => content.type === "image")
  //         ?.dimensions.width ?? 0,
  //     height:
  //       post.data.content.find((content) => content.type === "image")
  //         ?.dimensions.height ?? 0,

  //     updatedAt: new Date(post.last_publication_date).toLocaleDateString(
  //       "pt-BR",
  //       {
  //         day: "2-digit",
  //         month: "long",
  //         year: "numeric",
  //       }
  //     ),
  //   };
  // });

  return {
    props: { posts: "alguma coisa" },
  };
};
