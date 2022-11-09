import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from "@prismicio/client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RichText } from "prismic-dom";

import developerImage from "../../../public/images/developer1.jpg";
import { getPrismicClient } from "../../services/prismic";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";

type Post = {
  slug: string;
  title: string;
  image?: string;
  width?: number;
  height?: number;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  const [isUndefined, setIsUndefined] = useState(true);

  return (
    <>
      <Navbar />
      <Head>
        <title>Home | portal dev</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`}>
              <div className="flex flex-row cursor-pointer">
                <div className="w-32 md:w-1/4 px-2 inline-block align-middle">
                  {isUndefined && (
                    <Image
                      className="w-full max-h-6"
                      src={post.image}
                      width={post.width}
                      height={post.height}
                      alt={post.title}
                    />
                  )}
                </div>
                <a className="w-64 md:w-full" key={post.slug}>
                  <time>{post.updatedAt}</time>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                </a>
              </div>
            </Link>
          ))}
        </div>
      </main>
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

  console.log(response.results);
  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
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
