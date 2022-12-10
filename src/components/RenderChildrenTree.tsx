import { Box } from "@primer/react";
import ContentChildren from "./ContentChildren";
import { RenderChildrenTreeNode } from "./RenderChildrenTreeNode";

export type RenderChildrenTree = {
  childrenList: Children[];
  level: number;
};

export interface Children {
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

export interface ChildrenRoot {
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

export function RenderChildrenTree({
  childrenList,
  level,
}: RenderChildrenTree) {
  return (
    <>
      {childrenList.map((child) => {
        return (
          <Box
            sx={{
              width: "100%",
              wordWrap: "break-word",
              display: "flex",
              mt: 4,
            }}
            key={child.id}
          >
            <Box
              sx={{
                pr: [0, null, null, 2],
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  borderWidth: 0,
                  borderRightWidth: 1,
                  borderColor: "border.muted",
                  borderStyle: "dotted",
                  width: "50%",
                  height: "100%",
                }}
              />
            </Box>

            <Box sx={{ width: "100%", overflow: "auto" }}>
              <ContentChildren content={child} />

              {child.children.length > 0 && (
                <RenderChildrenTreeNode
                  key={child.id}
                  childrenList={child.children}
                  level={level + 1}
                />
              )}
            </Box>
          </Box>
        );
      })}
    </>
  );
}
