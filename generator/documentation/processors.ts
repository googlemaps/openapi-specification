import stringify from "remark-stringify";
import unified from "unified";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import fromMarkdown_ from "mdast-util-from-markdown";
import gfm from "remark-gfm";
import syntax from "micromark-extension-gfm";
import { gfmFromMarkdown } from "mdast-util-gfm";

export const fromMarkdown = (s: string) =>
  fromMarkdown_(s, {
    extensions: [syntax()],
    mdastExtensions: [gfmFromMarkdown],
  });

export const mdProcessor = unified().use(gfm).use(stringify, {
  bullet: "-",
  fence: "`",
  fences: true,
  incrementListMarker: false,
});

export const htmlProcessor = unified()
  .use(remarkParse)
  .use(gfm)
  .use(remarkHtml);
