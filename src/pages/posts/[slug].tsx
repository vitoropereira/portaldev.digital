import { GetServerSideProps } from "next";
import Head from "next/head";
import Contents from "src/components/Contents";
import Navbar from "src/components/Navbar";
import { RenderChildrenTree } from "src/components/RenderChildrenTree";
import removeMarkdown from "src/utils/texts";

interface Children {
  id: string;
  owner_id: string;
  parent_id: string;
  slug: string;
  title: any;
  body: string;
  status: string;
  source_url: any;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: any;
  owner_username: string;
  tabcoins: number;
  children: ChildrenRoot[];
  children_deep_count: number;
}

interface ChildrenRoot {
  id: string;
  owner_id: string;
  parent_id: string;
  slug: string;
  title: any;
  body: string;
  status: string;
  source_url: any;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: any;
  owner_username: string;
  tabcoins: number;
  children: any[];
  children_deep_count: number;
}

interface ContentProps {
  id: string;
  owner_id: string;
  parent_id: string | null;
  slug: string;
  title: string;
  body: string;
  status: string;
  source_url: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: string | null;
  owner_username: string;
  tabcoins: number;
  children_deep_count: number;
}

interface PostProps {
  contentFound: ContentProps;
  childrenFound: Children[];
}

export default function Post({ contentFound, childrenFound }: PostProps) {
  return (
    <>
      <Navbar />
      <Head>
        <title>{contentFound.title} | Portal Dev</title>
      </Head>

      <main className="max-w-6xl my-0 mx-auto px-8 py-0 max-md:px-2 max-md:w-screen">
        <article className="mb-20 mt-4">
          <Contents content={contentFound} />

          <RenderChildrenTree childrenList={childrenFound} level={0} />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const response = await fetch(
    `https://www.tabnews.com.br/api/v1/contents/portaldev/${slug}`
  )
    .then((response) => response.json())
    .then((data) => data);

  const oneLineBody = removeMarkdown(response.body).replace(/\s+/g, " ");

  const contentMetadata = {
    title: `${response.title ?? oneLineBody.substring(0, 80)} · ${
      response.owner_username
    }`,
    // image: `${webserverHost}/api/v1/contents/${response.owner_username}/${response.slug}/thumbnail`,
    image:
      "https://www.portaldev.digital/_next/static/media/avatar.629887bb.svg",
    url: `https://www.portaldev.digital/${response.slug}`,
    description: oneLineBody.substring(0, 190),
    published_time: response.published_at,
    modified_time: response.updated_at,
    author: response.owner_username,
    type: "",
  };

  const parentContentFound = await fetch(
    `https://www.tabnews.com.br/api/v1/contents/portaldev/${slug}/children`
  )
    .then((response) => response.json())
    .then((data) => data);

  return {
    props: {
      contentFound: JSON.parse(JSON.stringify(response)),
      childrenFound: JSON.parse(JSON.stringify(parentContentFound)),
      contentMetadata: JSON.parse(JSON.stringify(contentMetadata)),
    },
  };
};
