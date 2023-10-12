import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import avatar from "public/images/avatar.svg";

interface TabnewsProps {
  id: string;
  owner_id: string;
  parent_id: string | null;
  slug: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  owner_username: string;
  tabcoins: number;
}

export type PostProps = {
  uid: string;
  slug: string;
  tags: string;
  title: string;
  tabcoins: number;
  createdAt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: PostProps[];
}

export default function Home({ posts }: PostsProps) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Home | portal dev</title>
      </Head>
      <div className="container mx-auto homeBackground mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="items-center mt-6 flex flex-col justify-center">
            <span className="text-2xl md:text-4xl">👏 Olá, bem vindo!</span>
            <h1 className="text-4xl md:text-7xl pl-10 mt-3">
              Blog do <span className="text-rose-600">portal dev</span>.
            </h1>
            <p className="text-1xl md:text-2xl pl-10 pr-5 mt-3">
              Do básico ao avançado na programação você encontrará por aqui.
            </p>
          </div>
          <div className="mx-auto py-4">
            <Image
              className="mx-auto flex align-middle justify-center img-fluid"
              src={avatar}
              alt="Girl coding"
            />
          </div>
        </div>
        <div className="border-b divide-white h-11"> </div>
        <div className="text-base px-3 mt-3">
          <h1 className="text-2xl md:text-4xl">Posts </h1>
          {posts.map((post) => (
            <Cards
              key={post.uid}
              href={`posts/${post.tags}/${post.slug}`}
              tags={post.tags}
              title={post.title}
              tabcoins={post.tabcoins}
              updatedAt={post.updatedAt}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [portaldev, VitorPereira, respondeaqui] = await Promise.all([
    fetch("https://www.tabnews.com.br/api/v1/contents/portaldev")
      .then((response) => response.json())
      .then((data) => data),

    fetch("https://www.tabnews.com.br/api/v1/contents/VitorPereira")
      .then((response) => response.json())
      .then((data) => data),

    fetch("https://www.tabnews.com.br/api/v1/contents/respondeaqui")
      .then((response) => response.json())
      .then((data) => data),
  ]);

  const data: TabnewsProps[] = [...portaldev, ...VitorPereira, ...respondeaqui];

  const postResponse = data.filter((post) => {
    return !post.parent_id && post.status === "published";
  });

  postResponse.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA;
  });

  const posts = postResponse.map((post) => {
    return {
      uid: post.id,
      slug: post.slug,
      title: post.title,
      tags: post.owner_username,
      createdAt: new Date(post.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      updatedAt: new Date(post.updated_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      tabcoins: post.tabcoins,
    };
  });

  return {
    props: { posts },
    revalidate: 1,
  };
};
