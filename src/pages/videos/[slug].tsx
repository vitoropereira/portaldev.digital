import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-dom";
import { useState } from "react";
import { VideoProps } from "..";
import Navbar from "../../components/Navbar";

import { getPrismicClient } from "../../services/prismic";

import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    video: VideoProps;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  const [isUndefined, setIsUndefined] = useState(true);
  if (post.video.thumbnail_url === undefined) {
    setIsUndefined(false);
  }
  return (
    <>
      <Navbar />
      <Head>
        <title>{post.title} | portal dev.</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="w-96 flex flex-col mt-3">
            <h2 className="mb-3">Assista o vídeo.</h2>
            <Link href={post.video.embed_url}>
              <a target="_blank">
                {isUndefined && (
                  <Image
                    src={post.video.thumbnail_url}
                    width={post.video.thumbnail_width}
                    height={post.video.thumbnail_height}
                    alt={post.title}
                  />
                )}
              </a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID("videos", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.resumo),
    video: response.data.videos,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };
  console.log(post);
  return {
    props: { post },
  };
};
