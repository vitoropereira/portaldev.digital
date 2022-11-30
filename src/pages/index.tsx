import Head from "next/head";
import Image from "next/image";

import avatar from "../../public/images/avatar.svg";
import Navbar from "../components/Navbar";
import { Widget } from "../components/Widget";

export type VideoProps = {
  embed_url: string;
  author_name: string;
  author_url: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  html: string;
};

type VideosProps = {
  uid: string;
  tags: string[];
  paragraph: string;
  title: string;
  video: VideoProps;
  image?: string;
  createdAt: string;
  updatedAt: string;
};

type PostProps = {
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
  posts: PostProps[];
  videos: VideosProps[];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Home | portal dev</title>
      </Head>
      <div className="container mx-auto homeBackground">
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
        <div className="text-2xl md:text-4xl pl-10 mt-3">
          <h1>Posts </h1>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* {posts.map((post) => (
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
              href={`/posts/${post.uid}`}
              updatedAt={post.updatedAt}
            />
          ))} */}
        </div>
        <div className="border-b divide-white h-11"> </div>
        <div className="text-2xl md:text-4xl pl-10 mt-3">
          <h1>Vídeos </h1>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {/* {videos.map((video) => (
            <VideosCards
              key={video.uid}
              video={video.video}
              title={video.title}
              paragraph={video.paragraph}
              tags={video.tags}
              href={`/videos/${video.uid}`}
            />
          ))} */}
        </div>
        <Widget />
      </div>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const prismic = getPrismicClient();

//   const postResponse = await prismic.query(
//     [Prismic.predicates.at("document.type", "posts")],
//     {
//       fetch: ["publication.title", "publication.content"],
//       pageSize: 100,
//     }
//   );

//   const videoResponse = await .query(
//     [Prismic.predicates.at("document.type", "videos")],
//     {
//       fetch: ["publication.title", "publication.content"],
//       pageSize: 100,
//     }
//   );

//   const posts = postResponse.results.map((post) => {
//     return {
//       uid: post.uid,
//       slug: post.uid,
//       title: RichText.asText(post.data.title),
//       tags: post.tags,
//       paragraph:
//         post.data.content.find((content) => content.type === "paragraph")
//           ?.text ?? "",
//       image:
//         post.data.content
//           .find((content) => content.type === "image")
//           ?.url.split("?")[0] ?? developerImage,
//       width:
//         post.data.content.find((content) => content.type === "image")
//           ?.dimensions.width ?? 0,
//       height:
//         post.data.content.find((content) => content.type === "image")
//           ?.dimensions.height ?? 0,
//       createdAt: new Date(post.first_publication_date).toLocaleDateString(
//         "pt-BR",
//         {
//           day: "2-digit",
//           month: "long",
//           year: "numeric",
//         }
//       ),
//       updatedAt: new Date(post.last_publication_date).toLocaleDateString(
//         "pt-BR",
//         {
//           day: "2-digit",
//           month: "long",
//           year: "numeric",
//         }
//       ),
//     };
//   });

//   const videos = videoResponse.results.map((video) => {
//     return {
//       uid: video.uid,
//       slug: video.uid,
//       title: RichText.asText(video.data.title),
//       tags: video.tags,
//       video: video.data.videos,
//       paragraph:
//         video.data.resumo.find((content) => content.type === "paragraph")
//           ?.text ?? "",
//       createdAt: new Date(video.first_publication_date).toLocaleDateString(
//         "pt-BR",
//         {
//           day: "2-digit",
//           month: "long",
//           year: "numeric",
//         }
//       ),
//       updatedAt: new Date(video.last_publication_date).toLocaleDateString(
//         "pt-BR",
//         {
//           day: "2-digit",
//           month: "long",
//           year: "numeric",
//         }
//       ),
//     };
//   });
//   return {
//     props: { posts, videos },
//     revalidate: 1,
//   };
// };
