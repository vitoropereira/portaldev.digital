import Head from "next/head";
import { ForumPost } from "../../components/ForumPost/Index";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

import styles from "./forum.module.css";

const ForumPosts = [
  {
    id: uuidv4(),
    author: {
      avatarUrl: "/images/avatarVitor.png",
      nome: "John Doe",
      role: "Administrador",
    },
    content: [
      { id: uuidv4(), type: "paragraph", content: "Fala galera, tudo bem?" },
      { id: uuidv4(), type: "paragraph", content: "Tudo bem, tudo bem!" },
      { id: uuidv4(), type: "paragraph", content: "Subi meu novo post hoje." },
      { id: uuidv4(), type: "link", content: "https://www.google.com" },
    ],
    publishedAt: new Date("2022-02-01 20:00:00"),
  },
  {
    id: uuidv4(),
    author: {
      avatarUrl: "/images/avatarVitor.png",
      nome: "John Doe",
      role: "Administrador",
    },
    content: [
      { id: uuidv4(), type: "paragraph", content: "Fala galera, tudo bem?" },
      { id: uuidv4(), type: "paragraph", content: "Outro detalhe importante." },
      { id: uuidv4(), type: "paragraph", content: "Não sei qual é." },
      { id: uuidv4(), type: "link", content: "https://www.portaldev.digital" },
    ],
    publishedAt: new Date("2022-03-01 20:00:00"),
  },
];

export default function Forum() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Forum | portal dev</title>
      </Head>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* {ForumPosts.map((post) => (
            <ForumPost
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))} */}
        </main>
      </div>
    </>
  );
}
