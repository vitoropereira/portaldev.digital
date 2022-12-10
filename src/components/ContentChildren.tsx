import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Box, Heading, Text, BranchName, Tooltip } from "@primer/react";

// Markdown Editor dependencies:
import { Viewer } from "@bytemd/react";
import gfmPlugin from "@bytemd/plugin-gfm";
import highlightSsrPlugin from "@bytemd/plugin-highlight-ssr";
import mermaidPlugin from "@bytemd/plugin-mermaid";
import breaksPlugin from "@bytemd/plugin-breaks";
import gemojiPlugin from "@bytemd/plugin-gemoji";
import "bytemd/dist/index.min.css";
import "highlight.js/styles/github.css";
import "github-markdown-css/github-markdown-light.css";
import CardTags from "./Cards/CardTags";
import PublishedSince from "./PublishedSince";
import { LinkIcon } from "@primer/octicons-react";
import Link from "next/link";

interface ParentContentProps {
  id: string;
  owner_id: string;
  parent_id: string;
  slug: string;
  body: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: string | null;
  owner_username: string;
  tabcoins: number;
  children?: string[];
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
  content: ContentProps;
  children?: ParentContentProps;
  mode?: string;
  viewFrame?: boolean;
}

interface ViewModeProps {
  contentObject: ContentProps;
  viewFrame?: boolean;
}

export default function ContentChildren({
  content,
  viewFrame = false,
}: PostProps) {
  const [contentObject, setContentObject] = useState(content);

  useEffect(() => {
    setContentObject((contentObject) => {
      return { ...contentObject, ...content };
    });
  }, [content]);

  return <ViewMode contentObject={contentObject} viewFrame={viewFrame} />;
}

function ViewMode({ contentObject, viewFrame }: ViewModeProps) {
  const bytemdPluginList = [
    gfmPlugin(),
    highlightSsrPlugin(),
    mermaidPlugin(),
    breaksPlugin(),
    gemojiPlugin(),
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
        borderWidth: viewFrame ? 1 : 0,
        p: viewFrame ? 4 : 0,
        borderRadius: "6px",
        borderColor: "border.default",
        borderStyle: "solid",
        wordBreak: "break-word",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="flex flex-wrap justify-between items-center whitespace-nowrap gap-1 mt-1 w-full">
            <BranchName>{contentObject.owner_username}</BranchName>
            <Link
              className="text-base text-slate-300 mr-24 h-5"
              href={`/${contentObject.owner_username}/${contentObject.slug}`}
              prefetch={false}
            >
              <Tooltip
                sx={{ position: "absolute", ml: 1, mt: "1px" }}
                aria-label={new Date(contentObject.published_at).toLocaleString(
                  "pt-BR",
                  {
                    dateStyle: "full",
                    timeStyle: "short",
                  }
                )}
              >
                <PublishedSince date={contentObject.published_at} />
              </Tooltip>
            </Link>
            <CardTags>
              {contentObject.tabcoins}{" "}
              <small style={{ fontSize: 10 }}>Tabcoins</small>
            </CardTags>
          </div>
        </Box>

        {!contentObject?.parent_id && contentObject?.title && (
          <Heading sx={{ overflow: "auto", wordWrap: "break-word" }} as="h1">
            {contentObject.title}
          </Heading>
        )}
      </Box>
      <Box sx={{ overflow: "hidden" }}>
        <Viewer value={contentObject.body} plugins={bytemdPluginList} />
      </Box>
      {contentObject.source_url && (
        <Box>
          <Text as="p" fontWeight="bold" sx={{ wordBreak: "break-all" }}>
            <LinkIcon size={16} /> Fonte:{" "}
            <Link href={contentObject.source_url}>
              {contentObject.source_url}
            </Link>
          </Text>
          <style global jsx>{`
            .bytemd {
              height: calc(100vh - 600px);
              min-height: 200px;
              border-radius: 6px;
              padding: 1px;
              border: 1px solid #d0d7de;
            }

            .bytemd:focus-within {
              border-color: #0969da;
              box-shadow: inset 0 0 0 1px #0969da;
            }

            .is-invalid .bytemd {
              border-color: #cf222e;
            }

            .is-invalid .bytemd:focus-within {
              border-color: #cf222e;
              box-shadow: 0 0 0 3px rgb(164 14 38 / 40%);
            }

            .bytemd .bytemd-toolbar {
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
            }

            .bytemd
              .bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:nth-of-type(1),
            .bytemd
              .bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:nth-of-type(4) {
              display: none;
            }

            .bytemd .bytemd-status {
              display: none;
            }

            .bytemd-fullscreen.bytemd {
              z-index: 100;
            }

            .tippy-box {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                Helvetica, Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji";
            }
          `}</style>
        </Box>
      )}
    </Box>
  );
}
